//eventRoutes.js
const express = require("express");
const router = express.Router();
const {
  Events
} = require("../models/eventmodels"); // Import all models


// Create a new event
router.post('/add-events', async (req, res) => {
  const event = new Events({
    name: req.body.name,
    category: req.body.category,
    categoryId: req.body.categoryId,
    completeAddress: req.body.completeAddress,
    description: req.body.description,
    rating: req.body.rating,
    contactNumber: req.body.contactNumber,
    singleLineReview: req.body.singleLineReview,
    tentativeCost: req.body.tentativeCost,
    openTime: req.body.openTime,
    closeTime: req.body.closeTime,
    backgroundImageLink: req.body.backgroundImageLink,
    
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// GET all events from all models
router.get("/all-events", async (req, res) => {
  try {
    const allEvents = await Events.find(); // Get all events from the database
    res.status(200).json(allEvents);
  } catch (err) {
    res.status(500).json({ message: "Error fetching events", error: err });
  }
});

// GET all events under the same category
router.get("/category/:category", async (req, res) => {
  const category = req.params.category;
  try {
    const eventsByCategory = await Events.find({ category: category })
      .select('name backgroundImageLink categoryId description rating'); // Specify fields you need

    if (eventsByCategory.length === 0) {
      return res.status(404).json({ message: "No events found for this category" });
    }

    res.status(200).json(eventsByCategory);
  } catch (err) {
    res.status(500).json({ message: "Error fetching events by category", error: err });
  }
});

 
// GET events by name
router.get("/name/:name", async (req, res) => {
  const name = req.params.name;
  try {
    const eventByName = await Events.findOne({ name: name }); // Find an event by name
    if (!eventByName) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(eventByName);
  } catch (err) {
    res.status(500).json({ message: "Error fetching event by name", error: err });
  }
});


// GET events by rating
router.get('/rating/:rating', async (req, res) => {
  try {
      const rating = parseFloat(req.params.rating); // Parse the rating from the URL
      const events = await Events.find({ rating: {$gte:rating }}); // Adjust this to your actual query
      if (events.length > 0) {
          res.json(events);
      } else {
          res.status(404).json({ message: 'No events found with that rating.' });
      }
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});



// GET events by cost

router.get('/cost/:cost', async (req, res) => {
  try {
      const cost = req.params.cost; // Get the cost parameter from the URL
      const events = await Events.find({ tentativeCost: cost }); // Query the database for events matching the cost
      if (events.length > 0) {
          res.json(events);
      } else {
          res.status(404).json({ message: 'No events found with that cost.' });
      }
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});


router.get('/search/:term', async (req, res) => {
  const term = req.params.term;
  try {
    const events = await Events.find({
      $or: [
        { name: { $regex: term, $options: 'i' } }, // Search by name
        { completeAddress: { $regex: term, $options: 'i' } }, // Search by complete address
        { description: { $regex: term, $options: 'i' } } // Search by description
      ]
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});










module.exports = router;
