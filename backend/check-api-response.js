const db = require('./config/database');

async function checkAPIResponse() {
    try {
        console.log('=== SIMULATING API RESPONSE ===\n');

        // Mimic what the backend API does using getAllSpas
        const SpaModel = require('./models/SpaModel');
        
        const filters = {}; // No filters
        const result = await SpaModel.getAllSpas(filters);

        console.log(`Received result:`, result);
        
        const spas = result.spas;
        console.log(`\nReceived ${spas.length} spas from getAllSpas\n`);

        if (spas.length > 0) {
            const firstSpa = spas[0];
            console.log('First spa keys:', Object.keys(firstSpa));
            console.log('\nFirst spa object:');
            Object.keys(firstSpa).forEach(key => {
                console.log(`  ${key}: ${JSON.stringify(firstSpa[key])}`);
            });
        }

        process.exit(0);
    } catch (error) {
        console.error('Error:', error.message);
        console.error(error);
        process.exit(1);
    }
}

checkAPIResponse();
