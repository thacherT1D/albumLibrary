
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('albums').del(),

    // Inserts seed entries
    knex('table_name').insert({id: 1, colName: 'rowValue'}),
    knex('table_name').insert({id: 2, colName: 'rowValue2'}),
    knex('table_name').insert({id: 3, colName: 'rowValue3'})
  );
};



albums().insert({
  artist: req.body.album_artist,
  name: req.body.album_name,
  genre: req.body.album_genre,
  stars: req.body.album_stars,
  explicit: req.body.album_explicit
