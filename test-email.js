// Script de test pour l'API email
// Exécutez avec: node test-email.js

const testEmail = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test Client',
        email: 'test@example.com',
        phone: '+223 77 17 60 60',
        serviceType: 'Carburant',
        quantity: '1000L',
        message: 'Ceci est un test du formulaire de contact SYGIM ENERGIES'
      })
    });

    const result = await response.json();
    console.log('Résultat:', result);
    
    if (result.success) {
      console.log('✅ Email envoyé avec succès!');
      console.log('📧 Vérifiez votre boîte email:', process.env.MAIL_TO || 'informatiquetechno03@gmail.com');
    } else {
      console.log('❌ Erreur:', result.error);
    }
  } catch (error) {
    console.error('❌ Erreur de test:', error.message);
  }
};

testEmail();
