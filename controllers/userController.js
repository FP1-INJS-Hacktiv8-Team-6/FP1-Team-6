const db = require("../config/config")
const { generateToken } = require("../helpers/jwt")
const { hashPassword, comparePassword } = require("../helpers/bcrypt")

class UserController {
  // Register Method
  static async register(req, res) {
    const { email, password } = req.body

    try {
      const hashedPassword = hashPassword(password)
      const checkEmailDuplicate = await db.query(
        `SELECT * FROM "Users" WHERE email =$1`,
        [email]
      )
      if (checkEmailDuplicate.rowCount === 1) {
        res.status(401).json({
          message: "Email has been used, try another email!",
        })
      } else {
        await db.query(
          `INSERT INTO "Users" (email, password) VALUES ($1, $2)`,
          [email, hashedPassword]
        )
        const user = await db.query(`SELECT * FROM "Users" WHERE email = $1`, [
          email
        ])
        console.log(user.rows[0]['id']);
        let response = {
          message: "Register Succcess",
          data: {
            id : user.rows[0]['id'],
            email : user.rows[0]['email'],
          },
        }
        res.status(201).json(response)
      }
    } catch (err) {
      res.status(500).json({
        message: "Register Failed",
        error: err,
      })
      console.log(err)
    }
  }

  // Login Method
  static async login(req, res) {
    const { email, password } = req.body

    try {
      const user = await db.query(`SELECT * FROM "Users" WHERE email = $1`, [
        email,
      ])

      // console.log(user.rows[0].password)
      // Check if user not found
      if (user.rowCount === 0) {
        throw {
          name: "User Login Error",
          devMessage: `User not found!`,
        }
      }

      const isCorrect = await comparePassword(password, user.rows[0].password)
      // console.log(isCorrect)
      if (!isCorrect) {
        throw {
          name: "User Login Error",
          devMessage: `User's password with email "${email}" does not match`,
        }
      } else {
        let payload = {
          id: user.rows[0].id,
          email: user.rows[0].email,
        }

        const token = generateToken(payload)
        return res.status(200).json({
          message: "Login Success",
          token: token,
        })
      }
    } catch (err) {
      res.status(401).json(err)
    }
  }
}

module.exports = UserController
