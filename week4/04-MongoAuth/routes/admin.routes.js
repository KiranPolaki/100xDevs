import { Router } from "express";
import { adminMiddleware } from "../middleware/admin.middleware.js";
import { Admin, Course } from "../db/index.js";

const router = Router();

// * Validations for the signup Route
const userSchema = zod.string().email();
const passSchema = zod.string().min(8);

// Admin Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const userResponse = userSchema.safeParse(userName);
  const passResponse = passSchema.safeParse(passWord);

  // * If they don't we can create a entry in mongo
  if (userResponse.success === false || passResponse.success === false) {
    res.json({
      message: "Admmin is not created, username and password cant be empty",
    });
  }
  const adminCreate = await Admin.create({
    username,
    password,
  });
  res.json({
    msg: "Admin created successfully",
  });
});

// router.post("/signin", (req, res) => {});

router.post("/courses", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  // * ZOD for validation must be used here
  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });
  // console.log(newCourse._id);
  res.json({
    msg: "Course Created successfullt",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const allCourses = await Course.find({});
  res.json({ courses: allCourses });
});

export default router;
