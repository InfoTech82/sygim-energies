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

    // Simulation d'envoi d'email (pour éviter les erreurs SMTP)
    console.log('=== NOUVEAU MESSAGE DE CONTACT ===');
    console.log(`Nom: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Téléphone: ${phone || 'Non fourni'}`);
    console.log(`Service: ${serviceType || 'Général'}`);
    console.log(`Quantité: ${quantity || 'Non spécifiée'}`);
    console.log(`Message: ${message || 'Aucun message'}`);
    console.log('================================');

    // En production, vous pourriez intégrer un service d'email comme:
    // - Resend
    // - SendGrid
    // - Mailgun
    // - Ou utiliser un webhook vers un service externe

    return NextResponse.json({ 
      success: true,
      message: 'Message reçu avec succès. Nous vous contacterons bientôt!'
    });

  } catch (error) {
    console.error('Erreur API contact:', error);
    return NextResponse.json({ 
      error: 'Erreur serveur. Veuillez réessayer plus tard.' 
    }, { status: 500 });
  }
}