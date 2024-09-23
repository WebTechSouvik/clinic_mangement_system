const jwt = require('jsonwebtoken');
const { User } = require("../models");
const logger = require('../config/logger');

const jwtAuthMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.authToken || req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Unauthorized, no token provided" });
        }
        // Verify the token using JWT secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded:", decoded);

        if (!decoded) {
            return res.status(401).json({ error: "Invalid token" });
        }

        const user = await User.findByPk(decoded.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user;
        next();
    }
    catch (err) {
        logger.error("JWT Auth Middleware Error:", err);
        return res.status(401).json({ error: "Unauthorized, invalid or expired token" });
    }

}

const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
}

module.exports = { jwtAuthMiddleware, generateToken }