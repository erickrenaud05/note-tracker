const router = require('express').Router();

const notesRouter = require('./notes');

router.use('./notes', notesRouter);
// router.use('*', /* returns index page*/)

module.exports = router;