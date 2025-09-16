# 📧 Configuration de l'envoi d'emails

## 🚀 Option 1: Resend (Recommandé)

### Étapes :
1. Allez sur [resend.com](https://resend.com)
2. Créez un compte gratuit (3000 emails/mois)
3. Obtenez votre clé API
4. Créez un fichier `.env.local` à la racine du projet :

```bash
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxxx
MAIL_TO=informatiquetechno03@gmail.com
```

### Avantages :
- ✅ Gratuit jusqu'à 3000 emails/mois
- ✅ Configuration simple
- ✅ Emails HTML stylés
- ✅ Pas de configuration SMTP complexe

---

## 🔧 Option 2: Gmail SMTP

### Étapes :
1. Activez l'authentification à 2 facteurs sur Gmail
2. Générez un mot de passe d'application
3. Créez un fichier `.env.local` :

```bash
# .env.local
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=informatiquetechno03@gmail.com
SMTP_PASS=your_app_password
MAIL_TO=informatiquetechno03@gmail.com
```

---

## 🚀 Option 3: SendGrid

### Étapes :
1. Allez sur [sendgrid.com](https://sendgrid.com)
2. Créez un compte (100 emails/jour gratuit)
3. Obtenez votre clé API
4. Créez un fichier `.env.local` :

```bash
# .env.local
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
MAIL_TO=informatiquetechno03@gmail.com
```

---

## 🛠️ Démarrage du serveur

```bash
# Installation des dépendances
npm install

# Démarrage en mode développement
npm run dev

# Ou en mode production
npm run build
npm start
```

## 📝 Test de l'API

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+223 77 17 60 60",
    "serviceType": "Carburant",
    "message": "Test message",
    "quantity": "1000L"
  }'
```

## 🔍 Vérification

- Les emails apparaîtront dans votre boîte de réception
- Les logs sont visibles dans la console du serveur
- Vercel affiche les logs dans le dashboard
