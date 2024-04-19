import mongoose, { Schema, startSession } from "mongoose";

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
