const db = require('./config/database');

async function checkAdminUsers() {
    try {
        console.log('=== CHECKING ADMIN USERS ===\n');

        const [admins] = await db.execute(`
            SELECT id, username, email, role, is_active 
            FROM admin_users 
            ORDER BY id
        `);

        console.log(`Found ${admins.length} admin users:\n`);
        admins.forEach(admin => {
            console.log(`ID: ${admin.id}`);
            console.log(`Username: ${admin.username}`);
            console.log(`Email: ${admin.email}`);
            console.log(`Role: ${admin.role}`);
            console.log(`Active: ${admin.is_active === 1 ? 'Yes' : 'No'}`);
            console.log('---');
        });

        // Check if there's at least one super_admin
        const superAdmins = admins.filter(a => a.role === 'super_admin' && a.is_active === 1);
        console.log(`\nSuper Admins (active): ${superAdmins.length}`);
        
        if (superAdmins.length === 0) {
            console.log('\n⚠️  WARNING: No active super admin found!');
            console.log('Creating a super admin for testing...\n');
            
            // Create a test super admin
            await db.execute(`
                UPDATE admin_users 
                SET role = 'super_admin' 
                WHERE id = 1
            `);
            
            console.log('✅ Admin ID 1 upgraded to super_admin role');
        }

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

checkAdminUsers();
