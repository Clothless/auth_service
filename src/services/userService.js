const { User } = require('../models/User');
const bcrypt = require('bcrypt');

/**
 * Get a user by ID (excluding the password field).
 * @param {number} userId - The ID of the user.
 * @returns {Promise<Object>} - The user object.
 */
const getUserById = async (userId) => {
    try {
        const user = await User.findByPk(userId, {
            attributes: { exclude: ['password'] }, // Exclude the password field
        });

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    } catch (error) {
        throw new Error(`Failed to fetch user: ${error.message}`);
    }
};

/**
 * Update a user's details.
 * @param {number} userId - The ID of the user.
 * @param {Object} updates - The fields to update (e.g., { email: 'new@example.com', password: 'newPassword' }).
 * @returns {Promise<Object>} - The updated user object.
 */
const updateUser = async (userId, updates) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error('User not found');
        }

        // Update user fields
        if (updates.email) user.email = updates.email;
        if (updates.password) user.password = updates.password;

        await user.save(); // Save the updated user

        return user;
    } catch (error) {
        throw new Error(`Failed to update user: ${error.message}`);
    }
};

/**
 * Delete a user by ID.
 * @param {number} userId - The ID of the user.
 * @returns {Promise<void>}
 */
const deleteUser = async (userId) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error('User not found');
        }

        await user.destroy(); // Delete the user
    } catch (error) {
        throw new Error(`Failed to delete user: ${error.message}`);
    }
};

/**
 * Get all users (excluding the password field).
 * @returns {Promise<Array>} - An array of user objects.
 */
const getAllUsers = async () => {
    try {
        return await User.findAll({
            attributes: {exclude: ['password']}, // Exclude the password field
        });
    } catch (error) {
        throw new Error(`Failed to fetch users: ${error.message}`);
    }
};

/**
 * Create a new user.
 * @param {Object} userData - The user data (e.g., { email: 'test@example.com', password: 'password123' }).
 * @returns {Promise<Object>} - The created user object.
 */
const createUser = async (userData) => {
    try {
        return await User.create(userData);
    } catch (error) {
        throw new Error(`Failed to create user: ${error.message}`);
    }
};

module.exports = {
    getUserById,
    updateUser,
    deleteUser,
    getAllUsers,
    createUser,
};