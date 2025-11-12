const db = require('./config/database');

async function checkSpaData() {
    try {
        console.log('=== CHECKING DATABASE SPA DATA ===\n');

        // Get sample spas with specific columns
        const [spas] = await db.execute(`
            SELECT 
                id, name, address, district, status, 
                payment_status, annual_payment_status, 
                reference_number, verification_status
            FROM spas 
            LIMIT 5
        `);

        console.log(`Found ${spas.length} spas\n`);

        spas.forEach((spa, idx) => {
            console.log(`\n--- Spa ${idx + 1} ---`);
            console.log(`ID: ${spa.id}`);
            console.log(`Name: ${spa.name}`);
            console.log(`Address: ${spa.address || '[NULL]'}`);
            console.log(`District: ${spa.district || '[NULL]'}`);
            console.log(`Status: ${spa.status || '[NULL]'}`);
            console.log(`Payment Status: ${spa.payment_status || '[NULL]'}`);
            console.log(`Annual Payment Status: ${spa.annual_payment_status || '[NULL]'}`);
            console.log(`Reference Number: ${spa.reference_number || '[NULL]'}`);
            console.log(`Verification Status: ${spa.verification_status || '[NULL]'}`);
        });

        // Check unique values
        console.log('\n\n=== UNIQUE VALUES IN DATABASE ===');
        
        const [districts] = await db.execute(`SELECT DISTINCT district FROM spas WHERE district IS NOT NULL ORDER BY district`);
        console.log('\nDistricts:', districts.map(d => d.district));

        const [statuses] = await db.execute(`SELECT DISTINCT status FROM spas WHERE status IS NOT NULL ORDER BY status`);
        console.log('\nStatuses:', statuses.map(s => s.status));

        const [paymentStatuses] = await db.execute(`SELECT DISTINCT payment_status FROM spas WHERE payment_status IS NOT NULL ORDER BY payment_status`);
        console.log('\nPayment Statuses:', paymentStatuses.map(p => p.payment_status));

        const [annualPaymentStatuses] = await db.execute(`SELECT DISTINCT annual_payment_status FROM spas WHERE annual_payment_status IS NOT NULL ORDER BY annual_payment_status`);
        console.log('\nAnnual Payment Statuses:', annualPaymentStatuses.map(a => a.annual_payment_status));

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

checkSpaData();
