import { model, Schema, Document } from "mongoose";
export interface IUser extends Document {
  name: string;
  projectValue: string;
  projectDepartment: string;
  city: string;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter a Name"],
    },
    projectValue: {
      type: String,
      required: [true, "Please Enter an Email"],
    },
    projectDepartment: {
      type: String,
      required: [true, "You should enter a Project Department"],
    },
    city: {
      type: String,
      required: [true, "Please enter a City"],
    }
  },
  { timestamps: true }
);

export default model<IUser>("User", userSchema);
