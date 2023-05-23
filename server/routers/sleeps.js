const { Router } = require("express");
const Sleep = require("../models/Sleep");
const router = Router();

// Route definitions go here
// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newSleep = new Sleep(request.body);
  newSleep.save((error, record) => {
    if (error.name && error.name === "ValidationError")
      return response.status(400).json(error.errors);
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
  Sleep.find({}, (error, record) => {
    if (error) return response.status(500).json(error.errors);
    response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Sleep.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Sleep.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error.errors);
    response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Sleep.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        country: body.country,
        state: body.state,
        city: body.city
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
