import { model, Schema } from "mongoose";
import { IUser } from "../types/DVA";

const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 1500,
    },
    phone: {
      type: String,
    },
    accessLevel: {
      type: Number,
      default: 0,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 1024,
    },
    canAccess: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  {
    versionKey: false,
  }
);

export default model<IUser>("User", userSchema);
