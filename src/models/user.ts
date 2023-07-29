import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    birthdate: {
      type: String,
    },
    signature: {
      default: '',
      type: String,
  },

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserModel = model("users", UserSchema);
export default UserModel;