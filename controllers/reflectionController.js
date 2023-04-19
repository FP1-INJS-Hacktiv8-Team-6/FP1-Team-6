const db = require("../config/config")

class ReflectionController {
    //create reflection by user
    static async createReflection(req, res) {
        // user_id integer
        const id = 1
        const { success, lowPoint, takeAway } = req.body
        try {
            const reflection = await db.query(
                `INSERT INTO "Reflections" ("User_id", "success", "low_point", "take_away") VALUES ($1, $2, $3, $4) RETURNING *`,
                [id, success, lowPoint, takeAway]
            )
            res.status(201).json(reflection.rows[0])
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error",
                error: err,
            })
        }
    }
    
    //get all reflections by user
    static async getAllReflections(req, res) {
        const id  = 1
        try {
            const reflections = await db.query(`SELECT * FROM "Reflections" WHERE "User_id" = $1`, [id])
            res.status(200).json(reflections.rows)
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error",
                error: err,
            })
        }
    }

    // update reflection by user and reflection id
    static async updateReflection(req, res) {
        const id = req.params.id
        const { success, lowPoint, takeAway } = req.body
        try {
            const reflection = await db.query(
                `UPDATE "Reflections" SET "success" = $1, "low_point" = $2, "take_away" = $3 WHERE id = $4 RETURNING *`,
                [success, lowPoint, takeAway, id]
            )
            res.status(200).json(reflection.rows[0])
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error",
                error: err,
            })
        }
    }

    // delete reflection by user and reflection id
    static async deleteReflection(req, res) {
        const id = req.params.id
        try {
            const reflection = await db.query(
                `DELETE FROM "Reflections" WHERE id = $1 RETURNING *`,
                [id]
            )
            res.status(200).json(reflection.rows[0])
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error",
                error: err,
            })
        }
    }
}

module.exports = ReflectionController