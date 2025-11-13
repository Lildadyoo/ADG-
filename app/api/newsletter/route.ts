import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate email
    if (!body.email || body.email.trim() === '') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const email = body.email.trim().toLowerCase();
    const subscribedAt = new Date().toISOString();

    // Send email notification using Resend
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
          subject: 'New Newsletter Subscription',
          html: formatNewsletterEmail(email, subscribedAt),
        }),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json().catch(() => ({}));
        console.error('Resend API error:', errorData);
        // Don't fail the request if email fails - subscription can still be logged
      }
    }

    // Log to console (for development)
    console.log('=== NEW NEWSLETTER SUBSCRIPTION ===');
    console.log(`Email: ${email}`);
    console.log(`Subscribed at: ${new Date(subscribedAt).toLocaleString()}`);
    console.log('===================================');

    // Option: Send to webhook (if configured)
    if (process.env.WEBHOOK_URL) {
      try {
        await fetch(process.env.WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'newsletter',
            email: email,
            subscribedAt: subscribedAt,
          }),
        });
      } catch (webhookError) {
        console.error('Webhook error:', webhookError);
        // Don't fail the request if webhook fails
      }
    }

    // TODO: In production, you might want to:
    // 1. Store the email in a database
    // 2. Integrate with an email marketing service (Mailchimp, ConvertKit, etc.)
    // 3. Send a welcome email to the subscriber

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    return NextResponse.json(
      { 
        error: 'Failed to subscribe',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Helper function to format email HTML
function formatNewsletterEmail(email: string, subscribedAt: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
          .email-box { background-color: white; padding: 15px; border-left: 4px solid #2563eb; margin: 15px 0; font-size: 18px; font-weight: bold; }
          .footer { background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Newsletter Subscription</h1>
          </div>
          <div class="content">
            <p>A new subscriber has joined your newsletter!</p>
            <div class="email-box">
              ${email}
            </div>
            <p><strong>Subscribed at:</strong> ${new Date(subscribedAt).toLocaleString()}</p>
          </div>
          <div class="footer">
            This subscription was made through the ADG website newsletter signup form.
          </div>
        </div>
      </body>
    </html>
  `;
}

// Disable static generation for this route
export const dynamic = "force-dynamic";

