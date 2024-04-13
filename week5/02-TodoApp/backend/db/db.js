import mongoose, { Schema } from "mongoose";
import { MONGO_URL } from "../config.js";

// * Use this to connect DB here

mongoose.connect(`${MONGO_URL}`);

const TodoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required Boss!"],
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export const Todos = mongoose.model("Todos", TodoSchema);
