const logOut = async (req, res) => {
    // Extract the user information from the request and the cookie token
    const userToken = req.user;
    const cookieToken = req.cookies.userLoginCookie;

    try {
        // Check if the user token is present
        if (userToken) {
            // Clear the cookie
            res.clearCookie('userLoginCookie', {
                httpOnly: true,
                // secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
                secure:true,
                // sameSite: 'Strict' // Helps mitigate CSRF attacks
            });

            // Send a success response
            return res.status(200).json({ message: "Logout successful" });
        }

        // If no user token is found, return an error
        return res.status(400).json({ message: "Invalid user or token not found" });
    } catch (error) {
        // Handle unexpected errors
        return res.status(500).json({ message: "Error during logout", error: error.message });
    }
};

module.exports = logOut;
