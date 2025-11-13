import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'subject', 'message'];
    for (const field of requiredFields) {
      if (!body[field] || body[field].trim() === '') {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Format the contact data for email
    const contactData = {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      submittedAt: new Date().toISOString(),
    };

    // Send email using Resend
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
          to: process.env.RECEIVE_EMAIL || 'your-email@example.com',
          subject: `Contact Form: ${getSubjectLabel(body.subject)}`,
          html: formatContactEmail(contactData),
        }),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json().catch(() => ({}));
        console.error('Resend API error:', errorData);
        throw new Error('Failed to send email via Resend');
      }
    }

    // Log to console (for development)
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log(JSON.stringify(contactData, null, 2));
    console.log('==================================');

    // Option: Send to webhook (if configured)
    if (process.env.WEBHOOK_URL) {
      try {
        await fetch(process.env.WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'contact',
            ...contactData,
          }),
        });
      } catch (webhookError) {
        console.error('Webhook error:', webhookError);
        // Don't fail the request if webhook fails
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send message',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Helper function to get subject label
function getSubjectLabel(subject: string): string {
  const subjectMap: { [key: string]: string } = {
    'volunteer': 'Volunteer Opportunities',
    'donate': 'Donation Inquiry',
    'partner': 'Partnership',
    'general': 'General Inquiry',
    'media': 'Media Inquiry',
  };
  return subjectMap[subject] || subject;
}

// Helper function to format email HTML
function formatContactEmail(data: any): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1f2937; }
          .value { margin-top: 5px; color: #4b5563; }
          .message-box { background-color: white; padding: 15px; border-left: 4px solid #2563eb; margin-top: 10px; }
          .footer { background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${getSubjectLabel(data.subject)}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="field">
              <div class="label">Submitted At:</div>
              <div class="value">${new Date(data.submittedAt).toLocaleString()}</div>
            </div>
          </div>
          <div class="footer">
            This message was submitted through the ADG website contact form.
          </div>
        </div>
      </body>
    </html>
  `;
}

// Disable static generation for this route
export const dynamic = "force-dynamic";

