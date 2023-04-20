const db = require("../config/config")
const { verifyToken } = require("../helpers/jwt")

async function authentication(req, res, next) {
  try {
    const token = req.get("token")
    const userDecoded = await verifyToken(token)
    let id = userDecoded.id
    let email = userDecoded.email

    const user = await db.query(
      `SELECT * FROM "Users" WHERE id =$1 AND email = $2 `,
      [id, email]
    )
    if (user.rowCount === 0) {
      return res.status(401).json({
        name: "Authentication Error",
        devMessage: `User with email "${email}" not found in database`,
      })
    } else {
      res.locals.user = user.rows[0]
      return next()
    }
  } catch (err) {
    console.log(err)
    return res.status(401).json(err)
  }
}

module.exports = { authentication }
