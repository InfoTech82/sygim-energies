import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Validation des champs requis
    if (!name || !email) {
      return NextResponse.json({ 
        error: 'Les champs nom et email sont requis' 
      }, { status: 400 });
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        error: 'Format d\'email invalide' 
      }, { status: 400 });
    }

    // Préparation du contenu de l'email
    const emailContent = `
      <h2>Nouveau message de contact - SYGIM ENERGIES</h2>
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || 'Non fourni'}</p>
        <p><strong>Service:</strong> ${serviceType || 'Général'}</p>
        <p><strong>Quantité:</strong> ${quantity || 'Non spécifiée'}</p>
        <p><strong>Message:</strong></p>
        <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #10b981;">
          ${message || 'Aucun message'}
        </p>
      </div>
      <p style="color: #666; font-size: 14px;">
        Message envoyé depuis le site web SYGIM ENERGIES
      </p>
    `;

    // Envoi de l'email avec Resend
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'SYGIM ENERGIES <noreply@sygim-energies.com>',
        to: [process.env.MAIL_TO || 'informatiquetechno03@gmail.com'],
        subject: `Nouveau message de contact - ${serviceType || 'Général'}`,
        html: emailContent,
      });
    } else {
      // Fallback: logging si pas de clé API
      console.log('=== NOUVEAU MESSAGE DE CONTACT ===');
      console.log(`Nom: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Téléphone: ${phone || 'Non fourni'}`);
      console.log(`Service: ${serviceType || 'Général'}`);
      console.log(`Quantité: ${quantity || 'Non spécifiée'}`);
      console.log(`Message: ${message || 'Aucun message'}`);
      console.log('================================');
    }

    return NextResponse.json({ 
      success: true,
      message: 'Message envoyé avec succès! Nous vous contacterons bientôt.'
    });

  } catch (error) {
    console.error('Erreur API contact:', error);
    return NextResponse.json({ 
      error: 'Erreur serveur. Veuillez réessayer plus tard.' 
    }, { status: 500 });
  }
}