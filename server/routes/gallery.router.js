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
    ORDER BY "id" DESC;`;

  pool.query(sqlQueryText)
  .then((result) => {
    console.log("GET request at /gallery");
    res.send(result.rows)
  }).catch((error) => {
    console.log("Error in GET:", error);
  })
});

// POST /gallery
router.post('/', (req, res) => {
  let newPost = req.body;

  const sqlQueryText = `
  INSERT INTO "gallery" ("title", "url", "description")
    VALUES ($1, $2, $3);`;

  const sqlValues = [newPost.title, newPost.url, newPost.description];

  pool.query(sqlQueryText, sqlValues)
  .then((result) => {
    console.log("POST request succesful");
    res.sendStatus(200);
  }).catch((error) => {
    console.log("Error in POST:", error);
    res.sendStatus(500);
  })
  
})

// DELETE /gallery/:id
router.delete('/:id', (req, res) => {
  const sqlQueryText = `
  DELETE FROM "gallery"
    WHERE "id" = $1;`;
  
  const sqlValues = [req.params.id];

  pool.query(sqlQueryText, sqlValues)
  .then((result) => {
    console.log("Got a DELETE request");
    res.sendStatus(200);
  }).catch((error) => {
    console.log("DELETE failed:", error);
    res.sendStatus(500);
  })
})

module.exports = router;
