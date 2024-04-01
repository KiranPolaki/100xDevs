import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:diaIThRNKl537LBX@polakisk.3rr4nqi.mongodb.net/mongoAuth"
);

const userSchema = mongoose.Schema(
  {
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
const adminSchema = mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);
const coursesSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    imageLink: {
      type: String,
    },
    published: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Courses = mongoose.model("Courses", coursesSchema);

export { User, Admin, Courses };
