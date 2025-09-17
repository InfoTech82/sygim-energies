# 📸 Guide d'ajout des images des stations

## 🎯 Images nécessaires

Ajoutez ces images dans le dossier `public/images/stations/` :

### 1. Station Bamako
- **Fichier** : `station-bamako.jpg`
- **Contenu** : Vue extérieure de la station principale de Bamako
- **Éléments** : Pompes à essence, signalétique SYGIM ENERGIES, clients

### 2. Station Abidjan  
- **Fichier** : `station-abidjan.jpg`
- **Contenu** : Installation portuaire d'Abidjan
- **Éléments** : Réservoirs de stockage, laboratoire qualité, équipements modernes

### 3. Station Mobile
- **Fichier** : `station-mobile.jpg`
- **Contenu** : Camion-citerne en action
- **Éléments** : Service de livraison, équipement mobile, équipe

### 4. Centre de Distribution
- **Fichier** : `centre-distribution.jpg`
- **Contenu** : Vue des installations de distribution
- **Éléments** : Réservoirs, bâtiments administratifs, zone de chargement

### 5. Station Rurale
- **Fichier** : `station-rurale.jpg`
- **Contenu** : Station dans un village/zone rurale
- **Éléments** : Service communautaire, équipement adapté, impact local

## 📏 Spécifications techniques

### Format et qualité
- **Format** : JPG (recommandé) ou PNG
- **Résolution** : 800x600px minimum (ratio 4:3)
- **Poids** : < 500KB par image
- **Orientation** : Paysage (horizontal)

### Optimisation
- **Compression** : Qualité 80-85%
- **Couleurs** : sRGB
- **Contraste** : Bon contraste pour la lisibilité
- **Éclairage** : Image bien éclairée et nette

## 🚀 Comment ajouter les images

### Méthode 1 : Via l'explorateur de fichiers
1. Ouvrez le dossier `public/images/stations/`
2. Copiez vos images dans ce dossier
3. Renommez-les selon la liste ci-dessus
4. Vérifiez que les noms correspondent exactement

### Méthode 2 : Via le terminal
```bash
# Naviguez vers le dossier
cd public/images/stations/

# Copiez vos images (remplacez par vos vrais chemins)
cp /chemin/vers/votre/image1.jpg station-bamako.jpg
cp /chemin/vers/votre/image2.jpg station-abidjan.jpg
cp /chemin/vers/votre/image3.jpg station-mobile.jpg
cp /chemin/vers/votre/image4.jpg centre-distribution.jpg
cp /chemin/vers/votre/image5.jpg station-rurale.jpg
```

## ✅ Vérification

Après avoir ajouté les images :

1. **Redémarrez le serveur** de développement
2. **Visitez la page** `/fleet` 
3. **Vérifiez** que les images s'affichent correctement
4. **Testez** sur mobile et desktop

## 🔄 Fallback automatique

Si une image n'est pas trouvée :
- L'emoji correspondant s'affichera automatiquement
- Le message "Image à venir" apparaîtra
- Le design reste cohérent

## 🎨 Conseils de design

### Composition
- **Règle des tiers** : Placez les éléments importants sur les lignes de force
- **Profondeur** : Incluez des éléments au premier plan et à l'arrière-plan
- **Couleurs** : Privilégiez les couleurs qui s'harmonisent avec le thème vert

### Éléments à inclure
- **Logo SYGIM ENERGIES** visible
- **Personnel** en uniforme si possible
- **Clients** utilisant les services
- **Équipements** modernes et bien entretenus
- **Environnement** propre et professionnel

## 📞 Support

Pour toute question :
- **Email** : informatiquetechno03@gmail.com
- **Documentation** : Voir le code de la page Fleet
- **Problèmes** : Vérifiez les noms de fichiers et la taille des images

---

**Note** : Les images s'afficheront automatiquement une fois ajoutées dans le bon dossier avec les bons noms !
