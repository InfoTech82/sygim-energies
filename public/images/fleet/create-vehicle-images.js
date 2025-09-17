const fs = require('fs');
const path = require('path');

// Créer des images de test pour les véhicules
const vehicleImages = [
  'vehicule-specialise.jpg'
];

// Créer des images SVG simples comme placeholder
const createSVGImage = (name, color) => {
  return `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="${color}"/>
    <text x="200" y="150" text-anchor="middle" fill="white" font-family="Arial" font-size="24" font-weight="bold">
      ${name}
    </text>
    <text x="200" y="180" text-anchor="middle" fill="white" font-family="Arial" font-size="16">
      Véhicule Spécialisé
    </text>
  </svg>`;
};

// Créer les images
vehicleImages.forEach((imageName) => {
  const svgContent = createSVGImage('VÉHICULE SPÉCIALISÉ', '#8B5CF6');
  const filePath = path.join(__dirname, imageName);
  
  fs.writeFileSync(filePath, svgContent);
  console.log(`✅ Image créée: ${imageName}`);
});

console.log('🎉 Image du véhicule spécialisé créée !');
