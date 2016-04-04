var express = require('express');
var router = express.Router();

var knex = require('../db/knex');
function albums() {
  return knex('albums');
}

router.get('/albums', function(req, res, next) {
  albums().select().then(function (records) {
    res.render('albums/index', {allAlbums: records});
  });
});

router.get('/albums/new', function(req, res, next) {
  res.render('albums/new');
});

router.post('/albums', function(req, res, next) {
  albums().insert({
    artist: req.body.album_artist,
    name: req.body.album_name,
    genre: req.body.album_genre,
    stars: req.body.album_stars,
    explicit: req.body.album_explicit
  }).then(function () {
    res.redirect('/albums');
  });
});

router.get('/albums/:id', function(req, res, next) {
  albums().where({id: req.params.id}).first().then(function (record) {
    console.log(record);
    res.render('albums/show', {theAlbum: record});
  });
});

router.get('/albums/:id/update', function(req, res, next) {
  albums().where({id: req.params.id}).first().then(function (record) {
    res.render('albums/update', {theAlbum: record});
  });
});

router.delete('/albums/:id', function(req, res, next) {
  albums().del().where({id: req.params.id}).then(function () {
    res.redirect('/albums');
  });
});

router.put('/albums/:id/update', function(req, res, next) {
  albums().select().where({id: req.params.id}).first().update({
    artist: req.body.album_artist,
    name: req.body.album_name,
    genre: req.body.album_genre,
    stars: req.body.album_stars,
    explicit: req.body.album_explicit
  }).then(function () {
    res.redirect('/albums');
  });
});

module.exports = router;
