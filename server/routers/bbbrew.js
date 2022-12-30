const { Router, response } = require("express");
const brewPairings = require("../models/BBbrew");
const router = Router();

router.post("/", (request, response) => {
  const brewPairings = new brewPairings(request.body);
  brewPairings.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
  brewPairings.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  brewPairings.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  brewPairings.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  brewPairings.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        beef: body.beef,
        chicken: body.chicken,
        pork: body.pork,
        fish: body.fish,
        lager: body.lager,
        americanpaleale: body.americanpaleale,
        germanlager: body.germanlager,
        pilsner: body.pilsner
      }
    },
    {
      new: true,
      upsert: true
    },
    (error, record) => {
      if (error) return response.status(500).json(error);
      return response.json(record);
    }
  );
});

module.exports = router;
