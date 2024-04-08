const logoutController = (req, res) => {
    try {
        // Remove cookies
        res.clearCookie('jwtAccessToken');

        // Check if cookie was cleared successfully (optional)
        const cookieCleared = !req.cookies.jwtAccessToken;
        if (!cookieCleared) {
            return res.status(500).json({
                success: false,
                message: "Failed to clear token cookie"
            });
        }

        // Send success response
        return res.status(200).json({
            success: true,
            message: "Logout Successful"
        });
    } catch (error) {
        // If there's any unexpected error
        return res.status(500).json({
            success: false,
            message: "Logout Failed"
        });
    }
};

module.exports = logoutController;
