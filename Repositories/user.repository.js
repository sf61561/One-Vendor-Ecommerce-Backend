import pool from "../Config/db.js";

export default class UserRepository {
    static async createUser(userData) {
        try {
            const { full_name, email,mobile, password, profile_picture, profile_picture_public_id } = userData;
            const query = 'INSERT INTO users (full_name, email, mobile_no, password_hash, profile_picture, profile_picture_public_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING full_name, email, mobile_no';
            const values = [full_name, email, mobile, password, profile_picture, profile_picture_public_id];
            const result = await pool.query(query, values);
            return { success: true, message: "User created successfully", user: result.rows[0] };
        } catch (error) {
            // console.error('Error creating user:', error);
            // throw error;
            return { success: false, message: "Error creating user", user: null };
        }
    }
    static async findUserByEmail(email) {
        try {
            const query = 'SELECT * FROM users WHERE email = $1';
            const values = [email];
            const result = await pool.query(query, values);
            if(result.rows.length === 0) {
                return { success: false, message: "User not found", user: null };
            }
            return { success: true, message: "User found", user: result.rows[0] };
        }
        catch (error) {
            return { success: false, message: "Error finding user by email", user: null };
        }
    }
    static async updateRefreshToken(userId, refreshToken) {
        try {
            const query = 'UPDATE users SET refresh_token = $1 WHERE id = $2';
            const values = [refreshToken, userId];
            await pool.query(query, values);
            return { success: true, message: "Refresh token updated successfully" };
        } catch (error) {
            // console.error('Error updating refresh token:', error);
            // throw error;
            return { success: false, message: "Error updating refresh token" };
        }
    }
    static async findUserById(id) {
        try {
            const query = 'SELECT * FROM users WHERE id = $1';
            const result = await pool.query(query, [id]);
            if (result.rows.length === 0) {
                return { success: false, user: null };
            }
            return { success: true, user: result.rows[0] };
        } catch (error) {
            return { success: false, user: null };
        }
    }
}