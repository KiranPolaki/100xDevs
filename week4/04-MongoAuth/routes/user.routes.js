import { Router } from "express";
import { userMiddleware } from "../middleware/user.middleware.js";
import { Course, User } from "../db/index.js";

const router = Router();

// User Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const newUser = await User.create({
    username,
    password,
  });
  res.json({
    message: "User Created successfully",
  });
});

router.get("/courses", async (req, res) => {
  const allCourses = await Course.find({});
  res.json({ allCourses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // * Get back the course ID that user wants to buy - from param
  const courseId = req.params.courseId;
  const username = req.headers.username;
  // ! we implement zod and Stripe for payment kind of thing here
  const updateUser = await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );
  res.json({
    message: "Course Purchased",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const user = await User.findOne({
    username: req.headers.username,
  });
  const course = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.json({
    course: course,
  });
});

export default router;
