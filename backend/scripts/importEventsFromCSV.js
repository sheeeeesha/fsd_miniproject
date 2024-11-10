const fs = require('fs');
const csv = require('csv-parser'); // CSV parser library
const { Events } = require('../models/eventmodels'); // Importing the event model

// Replace with your actual AWS bucket information
const BUCKET_NAME = 'things2do-places2';
const REGION = 'ap-south-1'; // e.g., 'us-west-1'

// Function to import events from CSV files
const importEventsFromCSV = async () => {
  const filePath = 'C:\\Users\\HP\\OneDrive\\Desktop\\mp_finalll\\thingstodo\\things2do\\data\\Events_with_images.csv'; // Change 'events' based on your actual CSV file name

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', async (data) => {
      const imageFileName = data.image_paths;
      const imageUrl = `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${imageFileName}`;

      const eventData = {
        name: data.Name,
        category: data.Category,
        categoryId: parseInt(data['CategoryId']), // Parsing CategoryId as a number
        completeAddress: data['Complete Address'],
        description: data.Description,
        rating: parseFloat(data.Rating), // Parsing Rating as a float
        contactNumber: data['Contact Number'],
        singleLineReview: data['Single Line Review'],
        tentativeCost: data['Tentative Cost'], // Keeping cost as a string
        openTime: data['Open Time'],
        closeTime: data['Close Time'],
        backgroundImageLink: imageUrl,
        image_paths: data.image_paths,
      };

      try {
        // Upsert: Update the existing document or insert a new one if it doesn't exist
        await Events.updateOne(
          { name: eventData.name },  // Search for an event by its name
          { $set: eventData },  // Set the new data for the event
          { upsert: true }  // Insert if it doesn't exist
        );
        console.log(`Upserted: ${eventData.name}`);
      } catch (err) {
        console.error(`Error upserting event: ${eventData.name}, error: ${err.message}`);
      }
    })
    .on('end', () => {
      console.log('Finished importing events.');
    })
    .on('error', (error) => {
      console.error(`Error reading file ${filePath}: ${error.message}`);
    });
};

// Export the function
module.exports = importEventsFromCSV;
