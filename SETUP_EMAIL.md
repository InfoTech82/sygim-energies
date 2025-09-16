# 📧 Configuration Email - SYGIM ENERGIES

## Comment recueillir les messages des clients

### Option 1: Resend (Recommandé)

1. **Créer un compte Resend**
   - Allez sur https://resend.com
   - Créez un compte gratuit
   - Obtenez votre clé API

2. **Configuration Vercel**
   - Dans votre dashboard Vercel
   - Allez dans Settings > Environment Variables
   - Ajoutez:
     - `RESEND_API_KEY` = votre clé API Resend
     - `MAIL_TO` = informatiquetechno03@gmail.com

3. **Configuration locale**
   - Créez un fichier `.env.local`
   - Ajoutez:
     ```
     RESEND_API_KEY=re_xxxxxxxxx
     MAIL_TO=informatiquetechno03@gmail.com
     ```

### Option 2: SendGrid

1. Créez un compte sur https://sendgrid.com
2. Obtenez votre clé API
3. Remplacez Resend par SendGrid dans le code

### Option 3: Mailgun

1. Créez un compte sur https://mailgun.com
2. Obtenez votre clé API
3. Remplacez Resend par Mailgun dans le code

### Option 4: Webhook vers service externe

1. Utilisez Zapier, Make.com, ou IFTTT
2. Créez un webhook qui reçoit les données
3. Configurez l'envoi d'email automatique

## Fonctionnalités actuelles

- ✅ Validation des champs requis
- ✅ Validation du format email
- ✅ Template HTML professionnel
- ✅ Gestion d'erreurs robuste
- ✅ Fallback vers logging si pas de clé API

## Test

1. Remplissez le formulaire de contact
2. Vérifiez que l'email arrive dans votre boîte
3. Consultez les logs Vercel si problème
