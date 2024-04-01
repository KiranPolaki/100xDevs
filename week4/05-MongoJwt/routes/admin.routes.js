import { Router } from "express";
import { adminMiddleware } from "../middlewares/admin.middleware.js";
import mongoose from "mongoose";
import { Admin, Courses } from "../db/index.js";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../index.js";
import zod from "zod";
// import { safeParse } from "zod"; // named imports

const router = Router();

// * ZOD Validations for the signup, signin route's
const userSchemaZod = zod.string();
const passSchemaZod = zod.string().min(8);
// * ZOD Validations for the course creation route's
const titleSchemsZod = zod.string();
const descriptionSchemsZod = zod.string();
const priceSchemsZod = zod.number();
const imageLinkSchemsZod = zod.string();
const publishedSchemsZod = zod.boolean();

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const userZodRes = userSchemaZod.safeParse(username);
  const passZodRes = passSchemaZod.safeParse(password);

  if (userZodRes.success === false || passZodRes.success === false) {
    res.json({
      message: "Username and passsword cant be empty.",
    });
  }

  const admin = await Admin.create({
    username,
    password,
  });
  res.json({
    message: "Admin is created",
  });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const userZodRes = userSchemaZod.safeParse(username);
  const passZodRes = passSchemaZod.safeParse(password);

  if (userZodRes.success === false || passZodRes.success === false) {
    res.json({
      message: "Username and passsword cant be empty.",
    });
  }
  // * check if user exists via DB first then jwt sign
  // * Jwt saves a data base call here for us
  const adminExists = await Admin.findOne({
    username,
    password,
  });

  if (!adminExists) {
    res.status(401).json({ message: "You are not a admin🤔" });
  } else {
    const token = jwt.sign(
      {
        username,
      },
      jwtSecret
    );
    res.status(201).json({
      token,
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const published = req.body.published;
  // ! ZOD ( Schema created above but have to use here )
  const newCourse = await Courses.create({
    title,
    description,
    price,
    imageLink,
    published,
  });
  res.json({
    message: "New course is created",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const allCourses = await Courses.find({});
  res.json({
    allCourses,
  });
});

export default router;
