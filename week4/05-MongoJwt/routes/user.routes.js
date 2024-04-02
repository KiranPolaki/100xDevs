import { Router, json } from "express";
import { userMiddleware } from "../middlewares/user.middleware.js";
import { Courses, User } from "../db/index.js";
import zod, { isAsync } from "zod";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../index.js";

const router = Router();

const userZodSchema = zod.string();
const passZodSchema = zod.string().min(8);

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const userZodRes = userZodSchema.safeParse(username);
  const passZodRes = passZodSchema.safeParse(password);
  if (userZodRes.success === false || passZodRes.success === false) {
    res.json({
      username: userZodRes,
      password: passZodRes,
    });
  }
  const userCreated = await User.create({
    username,
    password,
  });
  res.status(201).json({
    message: "User is created",
  });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const userZodRes = userZodSchema.safeParse(username);
  const passZodRes = passZodSchema.safeParse(password);
  if (userZodRes.success === false || passZodRes.success === false) {
    res.json("something wrong!");
    return;
  }
  const userExists = await User.findOne({
    username,
    password,
  });
  const token = jwt.sign(
    {
      username,
    },
    jwtSecret
  );
  res.status(201).json({
    token,
    message: "User exists",
  });
});

router.get("/courses", userMiddleware, async (req, res) => {
  const allCourses = await Courses.find({
    published: true,
  });
  res.json({
    allCourses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.username;
  const updateUser = await User.updateOne(
    {
      username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );
  res.json(updateUser);
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const user = await User.findOne({
    username: req.headers.username,
  });
  const course = await Courses.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.json({
    course: course,
  });
});

export default router;
