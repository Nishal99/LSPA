const db = require('../config/database');

(async () => {
  try {
    console.log('Adding `date` column to blog_posts...');
    await db.execute("ALTER TABLE blog_posts ADD COLUMN `date` DATE NULL DEFAULT NULL");
    console.log('ALTER TABLE executed. Verifying columns...');
    const [rows] = await db.execute("SHOW COLUMNS FROM blog_posts");
    rows.forEach(r => console.log('-', r.Field, r.Type, r.Null === 'YES' ? 'NULL' : 'NOT NULL', r.Default ? `DEFAULT=${r.Default}` : ''));
    process.exit(0);
  } catch (err) {
    console.error('Error altering table:', err.message);
    process.exit(1);
  }
})();
