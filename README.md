# SYGIM ENERGIES SAS - Site Web

Site web officiel de SYGIM ENERGIES SAS, leader du transport pétrolier en Côte d'Ivoire.

## 🚀 Déploiement

### Option 1: Vercel (Recommandé)

1. **Connecter le repository GitHub à Vercel**
2. **Configuration automatique** - Vercel détectera Next.js
3. **Variables d'environnement** (si nécessaire) :
   ```
   NEXTAUTH_SECRET=votre_secret
   NEXTAUTH_URL=https://votre-domaine.vercel.app
   ```

### Option 2: Netlify

1. **Connecter le repository GitHub à Netlify**
2. **Configuration** :
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Redirections** : Configurées dans `netlify.toml`

### Option 3: Railway

1. **Connecter le repository GitHub à Railway**
2. **Configuration automatique** - Railway détectera Next.js
3. **Variables d'environnement** via le dashboard Railway

## 🛠️ Développement Local

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Build pour la production
npm run build

# Démarrage du serveur de production
npm start
```

## 📁 Structure du Projet

- `app/` - Pages Next.js avec App Router
- `components/` - Composants React réutilisables
- `public/images/` - Images et assets statiques
- `messages/` - Fichiers de traduction (FR/EN)

## 🌐 Fonctionnalités

- ✅ **Multilingue** (Français/Anglais)
- ✅ **Responsive Design**
- ✅ **Loader animé**
- ✅ **Formulaire de contact**
- ✅ **Optimisé SEO**
- ✅ **Performance optimisée**

## 📧 Contact

Pour toute question technique, contactez l'équipe de développement.