const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const sqlQueryText = `
    UPDATE "gallery"
      SET "likes" = "likes"+1
      WHERE "id" = $1;`;
  
  const sqlValues = [req.params.id];

  pool.query(sqlQueryText, sqlValues)
  .then((result) => {
    console.log("PUT request at /gallery/like/:id");
    res.sendStatus(200);
  }).catch((error) => {
    console.log("Error in PUT:", error);
    res.sendStatus(500);
  })
});

// GET /gallery
router.get('/', (req, res) => {
  const sqlQueryText = `
  SELECT * FROM "gallery"
    ORDER BY "id";`;

  pool.query(sqlQueryText)
  .then((result) => {
    console.log("GET request at /gallery");
    res.send(result.rows)
  }).catch((error) => {
    console.log("Error in GET:", error);
  })
});

module.exports = router;
