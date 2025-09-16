// Test de l'API email en production
// Remplacez YOUR_VERCEL_URL par votre URL Vercel

const VERCEL_URL = 'https://sygim-energies.vercel.app'; // Remplacez par votre URL

const testProductionEmail = async () => {
  try {
    console.log('🧪 Test de l\'API email en production...');
    console.log('📧 URL:', VERCEL_URL + '/api/contact');
    
    const response = await fetch(VERCEL_URL + '/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test Production SYGIM',
        email: 'test@sygim-energies.com',
        phone: '+223 77 17 60 60',
        serviceType: 'Carburant Premium',
        quantity: '5000L',
        message: 'Test de l\'API email en production. Ce message devrait arriver dans votre boîte email !'
      })
    });

    const result = await response.json();
    console.log('📊 Résultat:', result);
    
    if (result.success) {
      console.log('✅ Email envoyé avec succès!');
      console.log('📧 Vérifiez votre boîte email: informatiquetechno03@gmail.com');
      console.log('📁 Vérifiez aussi le dossier spam');
    } else {
      console.log('❌ Erreur:', result.error);
    }
  } catch (error) {
    console.error('❌ Erreur de test:', error.message);
  }
};

testProductionEmail();
