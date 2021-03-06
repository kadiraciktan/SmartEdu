const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

router.route('/').get(courseController.getAllCourses);
router.route('/:slug').get(courseController.getCourse);
router.route('/').post(courseController.createCourse);

module.exports = router;
