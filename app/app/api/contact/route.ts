// Force this route to be treated as dynamic and never statically analyzed/prerendered
// during "Collecting page data". This keeps the production build from stalling and
// ensures the email SDK is only loaded at request time.
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/*
  ────────────────────────────────────────────────────────────────────────────
  CONTACT FORM EMAIL — VERCEL SETUP
  To make the contact form work in Vercel:
    1. Go to Vercel Project Settings
    2. Open Environment Variables
    3. Add: RESEND_API_KEY  (your key from https://resend.com)
    4. Make sure it is available for Production and Preview
    5. Redeploy the project

  EMAIL SENDER / DOMAIN
  This sends from "Coastline Cedar <hello@coastlinecedar.com>".
  Before production email sending works, coastlinecedar.com must be verified in
  Resend (Resend > Domains > Add Domain, then add the DNS records). Until the
  domain is verified, Resend will reject sends from this address.
  ────────────────────────────────────────────────────────────────────────────
*/

const FROM = 'Coastline Cedar <hello@coastlinecedar.com>';

// Where inquiries are delivered. Update to the business inbox.
const TO = ['hello@coastlinecedar.com'];

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Log for debugging; do NOT expose this wording to customers.
      console.error('[contact] RESEND_API_KEY is not set. Add it in Vercel > Environment Variables.');
      return Response.json(
        { success: false, error: 'EMAIL_NOT_CONFIGURED' },
        { status: 500 }
      );
    }

    // Lazy-import so the SDK is never evaluated during the build's data-collection phase.
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    const body = await request.json();

    const name = body.name || '';
    const email = body.email || '';
    const phone = body.phone || '';
    const projectType = body.projectType || '';
    const dimensions = body.dimensions || '';
    const message = body.message || '';

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: 'MISSING_FIELDS' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: FROM,
      to: TO,
      subject: `New Coastline Cedar inquiry from ${name}`,
      replyTo: email,
      text: `
New inquiry from Coastline Cedar website

Name: ${name}
Email: ${email}
Phone: ${phone}
Project Type: ${projectType}
Dimensions: ${dimensions}

Message:
${message}
      `,
    });

    if (error) {
      console.error('[contact] Resend send error:', error);
      return Response.json({ success: false, error: 'SEND_FAILED' }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return Response.json({ success: false, error: 'SERVER_ERROR' }, { status: 500 });
  }
}
