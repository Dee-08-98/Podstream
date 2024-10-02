const registerUser = require("../Models/signup");
const generateToken = require("../Utils/generateToken");

const login = async (req, res) => {
    const { email, password } = req.body;

    // Validate input fields
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Validate password length
    if (password.length < 6 || password.length > 8) {
        return res.status(400).json({ message: "Password must be between 6 and 8 characters" });
    }

    try {
        // Check if the email exists
        const existEmail = await registerUser.findOne({ email }).select("+password");
        if (!existEmail) {
            return res.status(400).json({ message: "User not registered" });
        }

        // Verify the password
        const isPasswordMatched = await existEmail.comparePassword(password);
        if (!isPasswordMatched) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const payload = {
            id: existEmail._id,
            email: existEmail.email,
        };
        const token = generateToken(payload);

        // Set cookie options
        const cookieOptions = {
            httpOnly: true,
            // secure: process.env.NODE_ENV === 'production', // Ensure cookies are only sent over HTTPS in production
            secure:true,
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
        };

        // Send response with cookie
        return res.cookie("userLoginCookie", token, cookieOptions)
            .status(200)
            .json({ message: "Login successful", token, user: existEmail });

    } catch (error) {
        // Handle unexpected errors
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

module.exports = login;
