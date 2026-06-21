import mongoose,{Schema} from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: null,
    },

    emailVerified: {
      type: Date,
      default: null,
    },
  }
);

const userModel = mongoose.models.User ||
  mongoose.model("User", UserSchema);

export default userModel;