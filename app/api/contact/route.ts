import { Resend } from 'resend';

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error('RESEND_API_KEY is missing');
  }

  return new Resend(apiKey);
}

export async function GET() {
  try {
    const resend = getResend();

    const { data, error } = await resend.emails.send({
      from: 'Coastline Cedar <onboarding@resend.dev>',
      to: ['celinadalir@gmail.com'],
      subject: 'Coastline Cedar API test',
      replyTo: 'celinadalir@gmail.com',
      text: 'This is a direct API test from Coastline Cedar.',
    });

    if (error) {
      return Response.json(
        {
          success: false,
          step: 'GET test',
          error,
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      step: 'GET test',
      message: 'API test email sent.',
      data,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        step: 'GET test',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const resend = getResend();
    const body = await request.json();

    const name = body.name || '';
    const email = body.email || '';
    const phone = body.phone || '';
    const projectType = body.projectType || '';
    const dimensions = body.dimensions || '';
    const message = body.message || '';

    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          error: 'Name, email, and message are required.',
        },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Coastline Cedar <onboarding@resend.dev>',
      to: ['celinadalir@gmail.com'],
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
      return Response.json(
        {
          success: false,
          step: 'POST form',
          error,
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      step: 'POST form',
      message: 'Form email sent.',
      data,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        step: 'POST form',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
