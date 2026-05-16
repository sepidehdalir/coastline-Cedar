import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = body.name || '';
    const email = body.email || '';
    const phone = body.phone || '';
    const projectType = body.projectType || '';
    const dimensions = body.dimensions || '';
    const message = body.message || '';

    if (!name  !email  !message) {
      return Response.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Coastline Cedar <onboarding@resend.dev>',
      to: ['sunifygroup@gmail.com'],
      subject: New Coastline Cedar inquiry from ${name},
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
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch {
    return Response.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    );
  }
}
