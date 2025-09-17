# 🧪 Test du système d'images

## 🚀 Test rapide

### 1. Images de test disponibles
Vous pouvez utiliser les images existantes dans `public/images/fleet/` pour tester :

```bash
# Copiez les images existantes pour tester
cp ../fleet/station1.JPG station-bamako.jpg
cp ../fleet/station2.JPG station-abidjan.jpg  
cp ../fleet/station3.JPG station-mobile.jpg
```

### 2. Créer des images de test
Utilisez le script `create-test-images.js` :

1. Ouvrez `create-test-images.js` dans un navigateur
2. Exécutez le script dans la console
3. Téléchargez les images générées
4. Placez-les dans ce dossier

### 3. Vérification
1. Redémarrez le serveur de développement
2. Visitez `/fleet`
3. Vérifiez que les images s'affichent
4. Testez le fallback en supprimant une image

## ✅ Fonctionnalités testées

- [x] Chargement des images réelles
- [x] Fallback vers emojis si image manquante
- [x] Responsive design
- [x] Animations au hover
- [x] Gestion d'erreurs
- [x] Optimisation Next.js

## 🔧 Dépannage

### Image ne s'affiche pas ?
1. Vérifiez le nom du fichier (sensible à la casse)
2. Vérifiez l'extension (.jpg, .jpeg, .png)
3. Vérifiez la taille du fichier (< 500KB)
4. Redémarrez le serveur

### Fallback ne fonctionne pas ?
1. Vérifiez la console pour les erreurs
2. Vérifiez que le composant StationImage est correct
3. Vérifiez les imports React

### Performance lente ?
1. Optimisez les images (compression)
2. Utilisez des formats modernes (WebP)
3. Vérifiez la taille des fichiers
