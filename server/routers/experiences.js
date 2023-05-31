const { Router } = require("express");
const Experience = require("../models/Experience");
const router = Router();

// Route definitions go here
// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newExperience = new Experience(request.body);
  newExperience.save((error, record) => {
    if (error?.name === 'ValidationError') return response.status(400).json(error.errors);
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
  Experience.find({}, (error, record) => {
    if (error) return response.status(500).json(error.errors);
    response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Experience.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Experience.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error.errors);
    response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Experience.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        airline: body.airline,
        reviews: body.reviews
      }
    },
    {
      new: true,
      upsert: true
    },
    (error, record) => {
      if (error?.name === 'ValidationError') return response.status(400).json(error.errors);
      if (error) return response.status(500).json(error.errors);
      response.json(record);
    }
  );
});

module.exports = router;
