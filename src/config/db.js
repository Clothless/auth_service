const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize with your database credentials
const sequelize = new Sequelize({
    dialect: 'postgres', // Use 'postgres' for PostgreSQL
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: false, // Disable logging SQL queries (optional)
    ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
});

// Test the database connection and sync the User model
const connectDB = async () => {
    try {
        await sequelize.authenticate(); // Test the connection
        console.log('Database connected successfully');

        // Sync the User model with the database
        const User = require('../models/User'); // Import the User model
        await User.sync(); // Create the `users` table if it doesn't exist
        console.log('Users table synchronized');
    } catch (error) {
        console.error('Database connection or synchronization error:', error);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = { sequelize, connectDB };