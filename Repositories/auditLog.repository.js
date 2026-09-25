import pool from "../Config/db.js";

export default class AuditLogRepository {
    static async create({ userId, email, action, ipAddress, userAgent, details }) {
        try {
            const query = `
                INSERT INTO audit_logs
                    (user_id, email, action, ip_address, user_agent, details)
                VALUES ($1, $2, $3, $4, $5, $6)
                RETURNING *
            `;
            const values = [
                userId   || null,
                email    || null,
                action,
                ipAddress || null,
                userAgent || null,
                details   ? JSON.stringify(details) : null
            ];
            const result = await pool.query(query, values);
            return { success: true, log: result.rows[0] };
        } catch (error) {
            // Never crash the app if audit log fails — just log the error
            console.error("Audit log write failed:", error.message);
            return { success: false };
        }
    }

    // static async findByUserId(userId, limit = 50) {
    //     try {
    //         const query = `
    //             SELECT * FROM audit_logs
    //             WHERE user_id = $1
    //             ORDER BY created_at DESC
    //             LIMIT $2
    //         `;
    //         const result = await pool.query(query, [userId, limit]);
    //         return { success: true, logs: result.rows };
    //     } catch (error) {
    //         return { success: false, logs: [] };
    //     }
    // }

    // static async findAll({ limit = 100, offset = 0, action = null }) {
    //     try {
    //         let query = `
    //             SELECT al.*, u.full_name
    //             FROM audit_logs al
    //             LEFT JOIN users u ON al.user_id = u.id
    //             ${action ? "WHERE al.action = $3" : ""}
    //             ORDER BY al.created_at DESC
    //             LIMIT $1 OFFSET $2
    //         `;
    //         const values = action ? [limit, offset, action] : [limit, offset];
    //         const result = await pool.query(query, values);
    //         return { success: true, logs: result.rows };
    //     } catch (error) {
    //         return { success: false, logs: [] };
    //     }
    // }
}