//Defines the path that you need to access some functions on the celebrity feature
var express = require('express');
var router = express.Router();
var celebrityController = require('../Controllers/celebrityController');
var uploadService = require('../Uploads/celebrityPics/celebPicsService');


/* GET trailers listing. */
router.get('/', celebrityController.getAll);

router.get('/:id', celebrityController.getById);

router.post('/create', uploadService.upload.single('picture'), celebrityController.add);

router.delete('/delete/:id', celebrityController.delete);

router.get('/search', celebrityController.search);

module.exports = router;