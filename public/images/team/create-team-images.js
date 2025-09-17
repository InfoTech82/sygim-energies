const fs = require('fs');
const path = require('path');

// Créer des images de test pour l'équipe
const teamImages = [
  'boubacar-traore.jpg',
  'equipe-technique.jpg', 
  'equipe-commerciale.jpg',
  'equipe-logistique.jpg'
];

// Créer des images SVG simples comme placeholder
const createSVGImage = (name, color) => {
  return `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="${color}"/>
    <text x="200" y="150" text-anchor="middle" fill="white" font-family="Arial" font-size="24" font-weight="bold">
      ${name}
    </text>
    <text x="200" y="180" text-anchor="middle" fill="white" font-family="Arial" font-size="16">
      Image à venir
    </text>
  </svg>`;
};

// Créer les images
teamImages.forEach((imageName, index) => {
  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];
  const names = ['BOUBACAR TRAORE', 'Équipe Technique', 'Équipe Commerciale', 'Équipe Logistique'];
  
  const svgContent = createSVGImage(names[index], colors[index]);
  const filePath = path.join(__dirname, imageName);
  
  fs.writeFileSync(filePath, svgContent);
  console.log(`✅ Image créée: ${imageName}`);
});

console.log('🎉 Toutes les images de l\'équipe ont été créées !');
