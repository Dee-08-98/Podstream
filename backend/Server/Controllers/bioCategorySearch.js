const bioCategory = require("../Models/bioCategory");

const bioSearch = async (req, res) => {




    try {
        // Perform the search using a case-insensitive regular expression
        const result = await bioCategory.find();
        return res.status(200).json({ message: "Category found", result });

    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).json({ message: "Server error while searching bio category" });
    }
};

module.exports = bioSearch;
