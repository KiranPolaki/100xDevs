import mongoose from "mongoose";

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://admin:diaIThRNKl537LBX@polakisk.3rr4nqi.mongodb.net/"
);

// Define schemas
const AdminSchema = new mongoose.Schema(
  {
    // Schema definition here
    username: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserSchema = new mongoose.Schema(
  {
    // Schema definition here
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    purchasedCourses: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  },
  { timestamps: true }
);

const CourseSchema = new mongoose.Schema(
  {
    // Schema definition here
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    imageLink: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

export { Admin, User, Course };
