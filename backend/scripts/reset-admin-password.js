const db = require('../config/database');

(async () => {
  try {
    const connection = await db.getConnection();
    // Update the user with id 20 (from server logs) to have a plain text password 'lsa123' for testing
    const [result] = await connection.execute(
      'UPDATE admin_users SET password_hash = ? WHERE id = ?',
      ['lsa123', 20]
    );
    console.log('Password update result:', result);
    connection.release();
    process.exit(0);
  } catch (err) {
    console.error('Error updating password:', err);
    process.exit(1);
  }
})();
