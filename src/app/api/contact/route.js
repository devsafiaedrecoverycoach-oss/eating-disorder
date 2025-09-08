import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // await transporter.sendMail({
    //   from: `"${name}" <${email}>`,
    //   to: process.env.EMAIL_USER_RECEIVE,
    //   subject: "New Contact Form Message",
    //   text: message,
    //   html: `<p><strong>Name:</strong> ${name}</p>
    //          <p><strong>Email:</strong> ${email}</p>
    //          <p><strong>Message:</strong> ${message}</p>`,
    // });
await transporter.sendMail({
  from: `"${name}" <${process.env.EMAIL_USER}>`, // Gmail sender account
  replyTo: email,                                // form user ka email
  to: process.env.EMAIL_USER_RECEIVE,            // receiver email
  subject: "💌 New Contact Form Message",
  text: message,
  html: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>New Contact Message</title>
  </head>
  <body style="margin:0;padding:0;background:#f5f7fb;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f7fb;padding:30px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background:#ffffff;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,0.08);overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background:linear-gradient(135deg,#8a2be2,#d16ba5);padding:20px;text-align:center;color:#fff;">
                <h1 style="margin:0;font-size:22px;">New Contact Form Message ✨</h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:25px 35px;color:#333;">
                <p style="font-size:16px;margin:0 0 15px;">Hello Safia,</p>
                <p style="font-size:14px;margin:0 0 20px;color:#555;">You received a new message from your website contact form. Here are the details:</p>
                
                <!-- Info box -->
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:20px;">
                  <tr>
                    <td style="background:#f9f5ff;border:1px solid #eee;border-radius:8px;padding:12px 16px;">
                      <p style="margin:0;font-size:14px;"><strong>Name:</strong> ${name}</p>
                      <p style="margin:6px 0 0;font-size:14px;"><strong>Email:</strong> ${email}</p>
                    </td>
                  </tr>
                </table>

                <!-- Message -->
                <div style="padding:15px;border-radius:8px;background:#fafafa;border:1px solid #eee;">
                  <p style="margin:0;font-size:14px;line-height:1.5;white-space:pre-wrap;color:#333;">
                    ${message}
                  </p>
                </div>

                <!-- CTA -->
                <div style="margin-top:25px;">
                  <a href="mailto:${email}" style="display:inline-block;padding:10px 18px;border-radius:6px;text-decoration:none;font-weight:bold;background:#8a2be2;color:#fff;">
                    Reply to ${name}
                  </a>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:18px 35px;text-align:center;background:#fafafa;font-size:12px;color:#888;border-top:1px solid #eee;">
                This message was sent from your website contact form.<br>
                If you did not expect this, you can safely ignore it.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `,
});


    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
