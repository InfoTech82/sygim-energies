import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuration du transporteur Nodemailer avec Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Votre adresse Gmail
    pass: process.env.GMAIL_APP_PASSWORD, // Mot de passe d'application Gmail
  },
});

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

    // Préparation du contenu de l'email HTML avec design simple et épuré
    const emailContent = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nouveau Contact - SYGIM ENERGIES</title>
    </head>
    <body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f5f5f5;">
      <div style="max-width: 500px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        
        <!-- Header simple -->
        <div style="background-color: #10b981; padding: 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">
            SYGIM ENERGIES
          </h1>
          <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">
            Nouveau message de contact
          </p>
        </div>

        <!-- Contenu principal -->
        <div style="padding: 25px;">
          
          <!-- Informations du client -->
          <div style="margin-bottom: 20px;">
            <h3 style="color: #333; margin: 0 0 15px 0; font-size: 16px; font-weight: bold; border-bottom: 2px solid #10b981; padding-bottom: 5px;">
              Informations du client
            </h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold; width: 80px;">Nom:</td>
                <td style="padding: 8px 0; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0; color: #333;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Téléphone:</td>
                <td style="padding: 8px 0; color: #333;">${phone || 'Non fourni'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Service:</td>
                <td style="padding: 8px 0; color: #333; text-transform: capitalize;">${serviceType || 'Général'}</td>
              </tr>
              ${quantity ? `
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Quantité:</td>
                <td style="padding: 8px 0; color: #333;">${quantity}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <!-- Message du client -->
          <div style="margin-bottom: 20px;">
            <h3 style="color: #333; margin: 0 0 15px 0; font-size: 16px; font-weight: bold; border-bottom: 2px solid #10b981; padding-bottom: 5px;">
              Message
            </h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; border-left: 4px solid #10b981;">
              <p style="color: #333; margin: 0; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${message || 'Aucun message spécifique'}</p>
            </div>
          </div>

          <!-- Actions -->
          <div style="background-color: #f0f9ff; padding: 15px; border-radius: 4px; border: 1px solid #e0f2fe;">
            <h4 style="color: #0369a1; margin: 0 0 10px 0; font-size: 14px; font-weight: bold;">
              Actions recommandées:
            </h4>
            <ul style="color: #0369a1; margin: 0; padding-left: 20px; font-size: 13px;">
              <li>Contacter le client dans les 24h</li>
              <li>Préparer un devis personnalisé</li>
              <li>Analyser les besoins du client</li>
            </ul>
          </div>

        </div>

        <!-- Footer avec logo -->
        <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
          <!-- Mini logo footer -->
          <div style="margin-bottom: 10px;">
            <span style="color: #10b981; font-size: 16px; font-weight: bold;">⚡ SYGIM</span>
            <span style="color: #10b981; font-size: 12px; font-weight: 600; letter-spacing: 1px;">ENERGIES</span>
          </div>
          
          <p style="color: #666; margin: 0; font-size: 12px;">
            SAS | Capital: 10 Millions FCFA | Bamako, Mali
          </p>
          <p style="color: #999; margin: 5px 0 0 0; font-size: 11px;">
            Message envoyé automatiquement le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>

      </div>
    </body>
    </html>
    `;

    // Contenu texte brut pour les clients email qui ne supportent pas HTML
    const textContent = `
⚡ SYGIM ENERGIES SAS - NOUVEAU MESSAGE DE CONTACT
═══════════════════════════════════════════════════════════════
Leader Transport Pétrolier au Mali
═══════════════════════════════════════════════════════════════

INFORMATIONS DU CLIENT
-----------------------
Nom: ${name}
Email: ${email}
Téléphone: ${phone || 'Non fourni'}
Service: ${serviceType || 'Général'}
Quantité: ${quantity || 'Non spécifiée'}

MESSAGE DU CLIENT
------------------
${message || 'Aucun message spécifique'}

ACTIONS RECOMMANDÉES
--------------------
- Contacter le client dans les 24h
- Préparer un devis personnalisé
- Analyser les besoins du client

═══════════════════════════════════════════════════════════════
⚡ SYGIM ENERGIES SAS
Capital: 10 Millions FCFA | Bamako, Mali
Message envoyé automatiquement le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
═══════════════════════════════════════════════════════════════
    `;

    // Envoi de l'email avec Nodemailer
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        const mailOptions = {
          from: `SYGIM ENERGIES <${process.env.GMAIL_USER}>`,
          to: [
            process.env.MAIL_TO || 'informatiquetechno03@gmail.com',
            'koumabouba13@gmail.com', 'doumbiaoumar02006@gmail.com'
          ],
          subject: `Nouveau message de contact - ${serviceType || 'Général'}`,
          text: textContent,
          html: emailContent,
        };

        await transporter.sendMail(mailOptions);
        console.log('✅ Email envoyé via Nodemailer + Gmail SMTP');
      } catch (emailError) {
        console.error('❌ Erreur Nodemailer:', emailError);
        // Fallback vers logging en cas d'erreur
        console.log('=== NOUVEAU MESSAGE DE CONTACT (Fallback) ===');
        console.log(`Nom: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Téléphone: ${phone || 'Non fourni'}`);
        console.log(`Service: ${serviceType || 'Général'}`);
        console.log(`Quantité: ${quantity || 'Non spécifiée'}`);
        console.log(`Message: ${message || 'Aucun message'}`);
        console.log('==========================================');
      }
    } else {
      // Fallback: logging si pas de configuration Gmail
      console.log('=== NOUVEAU MESSAGE DE CONTACT (Mode Développement) ===');
      console.log('⚠️ Configuration Gmail manquante - Variables d\'environnement requises:');
      console.log('- GMAIL_USER: Votre adresse Gmail');
      console.log('- GMAIL_APP_PASSWORD: Mot de passe d\'application Gmail');
      console.log('');
      console.log('Données du message:');
      console.log(`Nom: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Téléphone: ${phone || 'Non fourni'}`);
      console.log(`Service: ${serviceType || 'Général'}`);
      console.log(`Quantité: ${quantity || 'Non spécifiée'}`);
      console.log(`Message: ${message || 'Aucun message'}`);
      console.log('=====================================================');
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