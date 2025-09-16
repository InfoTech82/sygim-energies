# 🔧 Configuration Email - SYGIM ENERGIES

## Étapes pour recevoir les emails des clients

### 1. Créer un compte Resend (5 minutes)
- Allez sur https://resend.com
- Cliquez sur "Sign Up"
- Vérifiez votre email
- Allez dans "API Keys"
- Créez une nouvelle clé (ex: `re_abc123...`)

### 2. Configurer Vercel (2 minutes)
- Ouvrez votre projet sur Vercel
- Allez dans Settings > Environment Variables
- Ajoutez ces variables :

| Variable | Valeur | Description |
|----------|--------|-------------|
| `RESEND_API_KEY` | `re_abc123...` | Votre clé API Resend |
| `MAIL_TO` | `votre-email@gmail.com` | Email où recevoir les messages |

### 3. Redéployer (automatique)
- Vercel redéploie automatiquement
- Attendez 2-3 minutes
- Testez le formulaire

### 4. Tester le système
```bash
# Démarrer le serveur local
npm run dev

# Dans un autre terminal, tester l'API
node test-email.js
```

### 5. Vérifier les emails
- Ouvrez votre boîte email
- Cherchez les emails de "SYGIM ENERGIES"
- Vérifiez le dossier spam si nécessaire

## Résolution de problèmes

### ❌ Pas d'emails reçus ?
1. Vérifiez les variables d'environnement Vercel
2. Vérifiez le dossier spam
3. Testez avec l'email de test
4. Consultez les logs Vercel

### ❌ Erreur 500 ?
1. Vérifiez que la clé API est correcte
2. Vérifiez que le domaine est vérifié sur Resend
3. Consultez les logs Vercel

### ❌ Email dans le spam ?
1. Ajoutez `noreply@sygim-energies.com` à vos contacts
2. Configurez un filtre pour les emails SYGIM

## Support
- Documentation Resend: https://resend.com/docs
- Logs Vercel: Dashboard > Functions > View Function Logs
