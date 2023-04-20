const jwt = require("jsonwebtoken")
const SECRET_KEY = "team6"

const generateToken = (payload) => {
  const token = jwt.sign(payload, SECRET_KEY)
  return token
}

const verifyToken = (token) => {
  const decoded = jwt.verify(token, SECRET_KEY)
  return decoded
}

module.exports = { generateToken, verifyToken }
