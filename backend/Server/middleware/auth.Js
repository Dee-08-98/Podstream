const jwt = require('jsonwebtoken');

const authmiddleware = (req, res, next) => {
    // Extract token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ success: false, message: "Token not found" });
    }

    // Extract token from Bearer token
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ success: false, message: "Token not provided" });
    }

    try {
        // Verify the token
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decodedToken; // Attach user information to request
        req.token = token; // Optionally attach token to request
        req.adminToken = token   // attach admin token 
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        // Handle token verification errors
        return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};

module.exports = authmiddleware;
