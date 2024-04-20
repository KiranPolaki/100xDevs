import mongoose, { connect } from "mongoose";
import { MONGO_URL, DB_NAME } from "../constant.js";

mongoose.connect(`${MONGO_URL}/${DB_NAME}`);

const cardSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    twitter: {
      type: String,
    },
    github: {
      type: String,
    },
    interests: {
      type: String,
    },
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", cardSchema);

export { Card };
