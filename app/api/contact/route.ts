import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      serviceType,
      message,
      quantity
    } = body || {};

    if (!name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.example.com',
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'informatiquetechno03@gmail.com',
        pass: process.env.SMTP_PASS || 'InfoTech2025@'
      }
    });

    const subject = `Nouveau message - ${serviceType || 'Contact'}`;
    const text = `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone || ''}\nService: ${serviceType || ''}\nQuantité: ${quantity || ''}\nMessage: ${message || ''}`;

    await transporter.sendMail({
      from: process.env.MAIL_FROM || 'no-reply@sygim-energies.com',
      to: process.env.MAIL_TO || 'contact@sygim-energies.com',
      subject,
      text
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}


