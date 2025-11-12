const mysql = require('mysql2');
require('dotenv').config();

// LSA Spa Management System Database Connection
// MySQL Connection Pool for better performance and scalability
// Use environment variables when available so the DB port/credentials are configurable.
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3309, // default to 3309 per setup
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '1234',
  database: process.env.DB_NAME || 'lsa_spa_management',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Promise wrapper for async/await support
const promisePool = pool.promise();

// Test connection
promisePool.getConnection()
  .then(connection => {
    console.log('✅ MySQL Connected to LSA Spa Management Database');
    connection.release();
  })
  .catch(err => {
    console.error('❌ MySQL Connection Error:', err.message);
  });

module.exports = promisePool;