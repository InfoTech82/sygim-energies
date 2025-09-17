// Script pour créer des logos de test (à exécuter dans le navigateur)
// Ouvrez la console du navigateur et collez ce code

function createTestLogo(width, height, color, text, bgColor = 'white') {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  // Fond
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
  
  // Cercle de couleur
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) * 0.3;
  
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.fill();
  
  // Texte
  ctx.fillStyle = 'white';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(text, centerX, centerY + 8);
  
  // Bordure
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.strokeRect(0, 0, width, height);
  
  return canvas.toDataURL('image/png', 0.9);
}

// Créer les logos de test
const testLogos = [
  { name: 'totalenergies.png', color: '#1E40AF', text: 'TE', bgColor: '#EFF6FF' },
  { name: 'oryx.png', color: '#EA580C', text: 'OR', bgColor: '#FFF7ED' },
  { name: 'star.png', color: '#FCD34D', text: 'ST', bgColor: '#FFFBEB' },
  { name: 'zen.png', color: '#7C3AED', text: 'ZE', bgColor: '#F3E8FF' },
  { name: 'ola.png', color: '#059669', text: 'OL', bgColor: '#ECFDF5' },
  { name: 'diamond-cement.png', color: '#6B7280', text: 'DC', bgColor: '#F9FAFB' }
];

testLogos.forEach(({ name, color, text, bgColor }) => {
  const dataUrl = createTestLogo(200, 200, color, text, bgColor);
  const link = document.createElement('a');
  link.download = name;
  link.href = dataUrl;
  link.click();
});

console.log('Logos de test créés ! Téléchargez-les et placez-les dans public/images/partners/');
