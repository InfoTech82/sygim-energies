import { NextResponse } from 'next/server';

export async function GET() {
  // Vérification des variables d'environnement (sans exposer les valeurs sensibles)
  const envCheck = {
    GMAIL_USER: process.env.GMAIL_USER ? '✅ Configuré' : '❌ Manquant',
    GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? '✅ Configuré' : '❌ Manquant',
    MAIL_TO: process.env.MAIL_TO ? '✅ Configuré' : '❌ Manquant',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ? '✅ Configuré' : '❌ Manquant',
    NODE_ENV: process.env.NODE_ENV || 'development',
    VERCEL: process.env.VERCEL ? '✅ Déployé sur Vercel' : '❌ Local',
  };

  return NextResponse.json({
    message: 'Vérification des variables d\'environnement',
    environment: envCheck,
    timestamp: new Date().toISOString(),
  });
}
