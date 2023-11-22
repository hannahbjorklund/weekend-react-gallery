CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
  ("url", "title", "description")
  VALUES
  ('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.');
  ('images/goat-baby.jpeg', 'Baby Goat!', 'Photo of a little baby goat standing on a stump.');
  ('images/goat-big.jpeg', 'Senor Goat!', 'Photo of a very stately old goat.');
  ('images/goat-silly.jpeg', 'Look at this Goat!', 'A cute goat sticks its tongue out in a silly fashion.');
  