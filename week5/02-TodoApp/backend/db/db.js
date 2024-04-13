import { Mongoose, Schema } from "mongoose";
import { MONGO_URL } from "../config.js";

// * Use this to connect DB here

Mongoose.connect(`${MONGO_URL}`);

const TodoSchema = new Schema(
  {
    title: {
      typr: String,
      required: true,
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

export const Todos = Mongoose.model("Todos", TodoSchema);
