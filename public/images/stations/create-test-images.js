// Script pour créer des images de test (à exécuter dans le navigateur)
// Ouvrez la console du navigateur et collez ce code

function createTestImage(width, height, color, text) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  // Fond dégradé
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, color + '80');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Texte
  ctx.fillStyle = 'white';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(text, width/2, height/2);
  
  // Bordure
  ctx.strokeStyle = 'rgba(255,255,255,0.3)';
  ctx.lineWidth = 4;
  ctx.strokeRect(0, 0, width, height);
  
  return canvas.toDataURL('image/jpeg', 0.8);
}

// Créer les images de test
const testImages = [
  { name: 'station-bamako.jpg', color: '#10B981', text: 'BAMAKO' },
  { name: 'station-abidjan.jpg', color: '#3B82F6', text: 'ABIDJAN' },
  { name: 'station-mobile.jpg', color: '#F59E0B', text: 'MOBILE' },
  { name: 'centre-distribution.jpg', color: '#8B5CF6', text: 'DISTRIBUTION' },
  { name: 'station-rurale.jpg', color: '#059669', text: 'RURALE' }
];

testImages.forEach(({ name, color, text }) => {
  const dataUrl = createTestImage(800, 600, color, text);
  const link = document.createElement('a');
  link.download = name;
  link.href = dataUrl;
  link.click();
});

console.log('Images de test créées ! Téléchargez-les et placez-les dans public/images/stations/');
