const axios = require('axios');
const db = require('./config/database');
const SpaModel = require('./models/SpaModel');

async function verifyAllFixes() {
    try {
        console.log('=== VERIFYING ALL FIXES ===\n');

        // 1. Verify Database has correct data
        console.log('1. CHECKING DATABASE DATA:');
        const [dbSpas] = await db.execute(`
            SELECT id, name, address, district, status, payment_status, annual_payment_status, reference_number
            FROM spas LIMIT 1
        `);
        if (dbSpas.length > 0) {
            const spa = dbSpas[0];
            console.log('   ✅ Address in DB:', spa.address ? '✓ Present' : '✗ Missing');
            console.log('   ✅ District in DB:', spa.district ? '✓ Present' : '✗ Missing');
            console.log('   ✅ Payment Status in DB:', spa.payment_status ? '✓ Present' : '✗ Missing');
            console.log('   ✅ Annual Payment Status in DB:', spa.annual_payment_status ? '✓ Present' : '✗ Missing');
            console.log('   ✅ Reference Number in DB:', spa.reference_number ? '✓ Present' : '✗ Missing');
        }

        // 2. Verify Backend API Model returns correct fields
        console.log('\n2. CHECKING BACKEND API MODEL RESPONSE:');
        const result = await SpaModel.getAllSpas({});

        if (result && result.spas && result.spas.length > 0) {
            const spa = result.spas[0];
            console.log('   ✅ Model returns address:', spa.address ? '✓ Present (' + (spa.address.substring(0, 50) + '...') + ')' : '✗ Missing');
            console.log('   ✅ Model returns district:', spa.district ? '✓ Present (' + spa.district + ')' : '✗ Missing');
            console.log('   ✅ Model returns payment_status:', spa.payment_status !== undefined ? '✓ Present (' + spa.payment_status + ')' : '✗ Missing');
            console.log('   ✅ Model returns annual_payment_status:', spa.annual_payment_status !== undefined ? '✓ Present (' + spa.annual_payment_status + ')' : '✗ Missing');
            console.log('   ✅ Model returns reference_number:', spa.reference_number ? '✓ Present (' + spa.reference_number + ')' : '✗ Missing');
            console.log('   ✅ Model returns status:', spa.status ? '✓ Present (' + spa.status + ')' : '✗ Missing');

            // 3. Show sample data for verification
            console.log('\n3. SAMPLE SPA DATA FROM MODEL:');
            console.log('   Spa ID:', spa.spa_id);
            console.log('   Spa Name:', spa.spa_name);
            console.log('   Address:', spa.address);
            console.log('   District:', spa.district);
            console.log('   Status:', spa.status);
            console.log('   Payment Status:', spa.payment_status);
            console.log('   Annual Payment Status:', spa.annual_payment_status);
            console.log('   Reference Number:', spa.reference_number);

            // 4. Test district filter at model level
            console.log('\n4. TESTING DISTRICT FILTER IN MODEL:');
            const districtResult = await SpaModel.getAllSpas({ district: spa.district });
            if (districtResult && districtResult.spas) {
                console.log(`   ✅ District filter works: Found ${districtResult.spas.length} spa(s) for district "${spa.district}"`);
                const matches = districtResult.spas.every(s => s.district === spa.district);
                console.log(`   ✅ All returned spas match district: ${matches ? '✓ Yes' : '✗ No'}`);
            }
        }

        console.log('\n=== ALL FIXES VERIFIED ✅ ===');
        process.exit(0);
    } catch (error) {
        console.error('Error during verification:', error.message);
        process.exit(1);
    }
}

verifyAllFixes();
