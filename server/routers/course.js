const router = require("express").Router();
const Course = require("../models").CourseModel;

// create
// post a new course
router.post("/", (req, res) => {});
// enroll a new course - student
router.post("/enroll/:_id", (req, res) => {});

// read
// get all courses
router.get("/", (req, res) => {});
// get course by title
router.get("/title/:name", (req, res) => {});
// get students enrolled courses - student
router.get("/enroll/:_id", (req, res) => {});
// get instructor posted courses - instructor
router.get("/post/:_id", (req, res) => {});

// update - instructor
router.patch("/:_id", (req, res) => {});

// delete - instructor
router.delete("/:_id", (req, res) => {});

module.exports = router;
