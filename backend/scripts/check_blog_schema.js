const db = require('../config/database');

(async () => {
  try {
    const [rows] = await db.execute("SHOW COLUMNS FROM blog_posts");
    console.log('Columns for blog_posts:');
    rows.forEach(r => console.log('-', r.Field, r.Type, r.Null === 'YES' ? 'NULL' : 'NOT NULL', r.Default ? `DEFAULT=${r.Default}` : ''));
    process.exit(0);
  } catch (err) {
    console.error('Error inspecting blog_posts table:', err.message);
    process.exit(1);
  }
})();
