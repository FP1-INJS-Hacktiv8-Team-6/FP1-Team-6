const db = require("../config/config")

function authorization(req, res, next) {
  const reflectionId = req.params.id
  const authenticatedUser = res.locals.user

  db.query(`SELECT * FROM "Reflections" WHERE id = $1 `, [reflectionId])
    .then((reflection) => {
      if (reflection.rowCount === 0) {
        return res.status(404).json({
          name: "Reflection Not Found",
          devMessage: `Reflection with id "${reflectionId}" not found!`,
        })
      }

      if (reflection.rows[0].User_id === authenticatedUser.id) {
        return next()
      } else {
        return res.status(403).json({
          name: "Authorization Error",
          devMessage: `User with email "${authenticatedUser.email}" does not have permission to access Reflection with id "${reflectionId}"`,
        })
      }
    })
    .catch((err) => {
      return res.status(500).json(err)
    })
}

module.exports = authorization
