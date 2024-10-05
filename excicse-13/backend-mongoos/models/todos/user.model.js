import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      min: 3,
    },
    email: {
      type: String,
      required: [true, "Email must required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password must required"],
      min: 6,
      max: 10,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
