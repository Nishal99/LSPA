// Test script to check database structure and sample data
const mysql = require('mysql2/promise');

async function testDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'lsa_spa_management'
        });

        console.log('=== DATABASE TEST ===\n');

        // Check table structure
        console.log('1. CHECKING SPAS TABLE COLUMNS:');
        const [columns] = await connection.execute(`
            SELECT COLUMN_NAME, COLUMN_TYPE, IS_NULLABLE, COLUMN_DEFAULT
            FROM INFORMATION_SCHEMA.COLUMNS
            WHERE TABLE_SCHEMA = 'lsa_spa_management' AND TABLE_NAME = 'spas'
            ORDER BY ORDINAL_POSITION
        `);
        
        console.log('Key columns:');
        ['id', 'name', 'address', 'district', 'status', 'payment_status', 'annual_payment_status', 'reference_number', 'verification_status'].forEach(col => {
            const colInfo = columns.find(c => c.COLUMN_NAME === col);
            if (colInfo) {
                console.log(`  ${col}: ${colInfo.COLUMN_TYPE} (nullable: ${colInfo.IS_NULLABLE})`);
            }
        });

        // Check sample data
        console.log('\n2. CHECKING SAMPLE SPA DATA:');
        const [spas] = await connection.execute(`
            SELECT 
                id, name, address, district, status, payment_status, 
                annual_payment_status, reference_number, verification_status
            FROM spas
            LIMIT 5
        `);

        console.log(`Found ${spas.length} spas`);
        spas.forEach((spa, idx) => {
            console.log(`\nSpa ${idx + 1}:`);
            console.log(`  ID: ${spa.id}`);
            console.log(`  Name: ${spa.name}`);
            console.log(`  Address: ${spa.address || 'NULL'}`);
            console.log(`  District: ${spa.district || 'NULL'}`);
            console.log(`  Status: ${spa.status || 'NULL'}`);
            console.log(`  Payment Status: ${spa.payment_status || 'NULL'}`);
            console.log(`  Annual Payment Status: ${spa.annual_payment_status || 'NULL'}`);
            console.log(`  Reference Number: ${spa.reference_number || 'NULL'}`);
        });

        // Check unique values
        console.log('\n3. CHECKING UNIQUE VALUES:');
        const [districts] = await connection.execute(`
            SELECT DISTINCT district FROM spas WHERE district IS NOT NULL
        `);
        console.log('\nDistricts:', districts.map(d => d.district).sort());

        const [statuses] = await connection.execute(`
            SELECT DISTINCT status FROM spas WHERE status IS NOT NULL
        `);
        console.log('\nStatuses:', statuses.map(s => s.status).sort());

        const [paymentStatuses] = await connection.execute(`
            SELECT DISTINCT payment_status FROM spas WHERE payment_status IS NOT NULL
        `);
        console.log('\nPayment Statuses:', paymentStatuses.map(p => p.payment_status).sort());

        const [annualPaymentStatuses] = await connection.execute(`
            SELECT DISTINCT annual_payment_status FROM spas WHERE annual_payment_status IS NOT NULL
        `);
        console.log('\nAnnual Payment Statuses:', annualPaymentStatuses.map(a => a.annual_payment_status).sort());

        await connection.end();
    } catch (error) {
        console.error('Error:', error.message);
    }
}

testDatabase();
