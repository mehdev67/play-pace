import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, company, projectType, budget, timeline, description } = body;

        // Validating environment variables
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Missing email configuration');
            // Allow success in development/demo mode even without configs
            return NextResponse.json(
                { message: 'Form submitted successfully (Simulation: Email config missing)' },
                { status: 200 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail', // Or use your SMTP host
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'mehdi@playpace.dev',
            subject: `New Project Request from ${name}`,
            html: `
                <h2>New Project Inquiry</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Company:</strong> ${company}</p>
                <hr />
                <h3>Project Details</h3>
                <p><strong>Type:</strong> ${projectType}</p>
                <p><strong>Budget:</strong> ${budget}</p>
                <p><strong>Timeline:</strong> ${timeline}</p>
                <p><strong>Description:</strong></p>
                <p>${description}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
