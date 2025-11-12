const axios = require('axios');

// Get auth token from environment or use test token
const token = 'your-actual-token'; // You'll need to set this

async function testAPI() {
    try {
        console.log('Fetching spas from API...');
        const response = await axios.get('http://localhost:3001/api/lsa/spas', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.data.success) {
            const spas = response.data.data.spas;
            console.log('\n=== API RESPONSE DEBUG ===');
            console.log('Total spas returned:', spas.length);
            
            if (spas.length > 0) {
                console.log('\n=== FIRST SPA OBJECT ===');
                const firstSpa = spas[0];
                console.log('Keys in first spa:', Object.keys(firstSpa));
                console.log('\nFirst spa details:');
                console.log(JSON.stringify(firstSpa, null, 2));
                
                console.log('\n=== SAMPLE DATA FROM 3 SPAS ===');
                spas.slice(0, 3).forEach((spa, idx) => {
                    console.log(`\nSpa ${idx + 1}:`);
                    console.log('  ID:', spa.spa_id);
                    console.log('  Name:', spa.spa_name);
                    console.log('  Address:', spa.address);
                    console.log('  District:', spa.district);
                    console.log('  Status:', spa.status);
                    console.log('  Payment Status:', spa.payment_status);
                    console.log('  Annual Payment Status:', spa.annual_payment_status);
                    console.log('  Reference:', spa.reference_number);
                });
                
                console.log('\n=== UNIQUE DISTRICTS ===');
                const districts = [...new Set(spas.map(s => s.district).filter(Boolean))];
                console.log('Districts found:', districts);
                
                console.log('\n=== UNIQUE STATUSES ===');
                const statuses = [...new Set(spas.map(s => s.status).filter(Boolean))];
                console.log('Statuses found:', statuses);
            }
        } else {
            console.log('API returned success: false');
            console.log(response.data);
        }
    } catch (error) {
        console.error('Error:', error.message);
        if (error.response) {
            console.error('Response:', error.response.data);
        }
    }
}

testAPI();
