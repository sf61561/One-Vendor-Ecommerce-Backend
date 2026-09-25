import bcrypt from "bcrypt";
import pool from "../config/db.js";

const seedUsers = async () => {
    try{
        const hashedPassword = await bcrypt.hash("12345678@Sf", 10);
        await pool.query("INSERT INTO users (full_name,email,mobile_no,password_hash,profile_picture,role,status,profile_picture_public_id,refresh_token) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)", ["Syed Fahad Mahmud","www.sf61561@gmail.com","+8801576700767", hashedPassword, null, "admin", "active", null, null]);
        console.log("Database seeded successfully");
    } catch (error) {
        console.error("Error seeding users:", error);
    }
    finally {
        await pool.end();
    }
}

seedUsers();