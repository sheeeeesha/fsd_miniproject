const express = require('express');
const router = express.Router();
const SearchTerm = require('../models/searchTerm');

// Route to save or update a search term
router.post('/save-search-term', async (req, res) => {
    try {
        const { term } = req.body; // Extract the search term from the request body

        // Check if the search term already exists in the database
        const existingTerm = await SearchTerm.findOne({ term });

        if (existingTerm) {
            // If the term exists, increment the count by 1
            existingTerm.count += 1;
            await existingTerm.save(); // Save the updated document
            res.status(200).json({ message: `Updated count for term: ${term}` });
        } else {
            // If the term doesn't exist, create a new document with count 1
            const newSearchTerm = new SearchTerm({
                term,
                count: 1,
            });
            await newSearchTerm.save(); // Save the new search term document
            res.status(201).json({ message: `Search term saved successfully: ${term}` });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to save or update search term' });
    }
});


// Route to retrieve all search terms with their counts
router.get('/search-terminologies', async (req, res) => {
    try {
        // Fetch all search terms with their counts from the database
        const searchTerms = await SearchTerm.find({}, 'term count'); // Only include the 'term' and 'count' fields

        res.json(searchTerms); // Send the retrieved search terms with counts as the response
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve search terms' });
    }
});


module.exports = router;

module.exports = router;
