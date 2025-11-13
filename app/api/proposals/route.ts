import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['projectTitle', 'organization', 'contactName', 'email', 'category', 'description', 'expectedImpact'];
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

    // Format the proposal data for email
    const proposalData = {
      projectTitle: body.projectTitle,
      organization: body.organization,
      contactName: body.contactName,
      email: body.email,
      phone: body.phone || 'Not provided',
      category: body.category,
      description: body.description,
      expectedImpact: body.expectedImpact,
      budget: body.budget || 'Not provided',
      submittedAt: new Date().toISOString(),
    };

    // Option 1: Send email using Resend (Recommended)
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
          subject: `New Project Proposal: ${body.projectTitle}`,
          html: formatProposalEmail(proposalData),
        }),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json().catch(() => ({}));
        console.error('Resend API error:', errorData);
        throw new Error('Failed to send email via Resend');
      }
    }

    // Option 2: Send email using Nodemailer (if configured)
    // You'll need to install nodemailer: npm install nodemailer
    // See setup instructions below

    // Option 3: Log to console (for development)
    // In production, you should use one of the email options above
    console.log('=== NEW PROJECT PROPOSAL ===');
    console.log(JSON.stringify(proposalData, null, 2));
    console.log('===========================');

    // Option 4: Send to webhook (e.g., Zapier, Make.com, or custom endpoint)
    if (process.env.WEBHOOK_URL) {
      try {
        await fetch(process.env.WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(proposalData),
        });
      } catch (webhookError) {
        console.error('Webhook error:', webhookError);
        // Don't fail the request if webhook fails
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Proposal submitted successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing proposal:', error);
    return NextResponse.json(
      { 
        error: 'Failed to submit proposal',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Helper function to format email HTML
function formatProposalEmail(data: any): string {
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
          .footer { background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Project Proposal Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Project Title:</div>
              <div class="value">${data.projectTitle}</div>
            </div>
            <div class="field">
              <div class="label">Category:</div>
              <div class="value">${data.category}</div>
            </div>
            <div class="field">
              <div class="label">Organization/Community:</div>
              <div class="value">${data.organization}</div>
            </div>
            <div class="field">
              <div class="label">Contact Name:</div>
              <div class="value">${data.contactName}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${data.phone}</div>
            </div>
            <div class="field">
              <div class="label">Project Description:</div>
              <div class="value">${data.description.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="field">
              <div class="label">Expected Impact:</div>
              <div class="value">${data.expectedImpact.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="field">
              <div class="label">Estimated Budget:</div>
              <div class="value">${data.budget}</div>
            </div>
            <div class="field">
              <div class="label">Submitted At:</div>
              <div class="value">${new Date(data.submittedAt).toLocaleString()}</div>
            </div>
          </div>
          <div class="footer">
            This proposal was submitted through the ADG website contact form.
          </div>
        </div>
      </body>
    </html>
  `;
}

// Disable static generation for this route
export const dynamic = "force-dynamic";

