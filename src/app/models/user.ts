import { model, models, Schema } from "mongoose";
import * as bcrypt from "bcrypt";
import { IRegisterInputs } from "@/app/register/types";

export type IUser = Omit<IRegisterInputs, "confirmPassword">;

const UserSchema = new Schema<IUser>(
  {
    login: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: {
      type: String,
      required: true,
      validate: (pass: string) => {
        if (pass.length < 6)
          new Error("Password must be between 6 and more characters!");
      },
    },
  },
  { timestamps: true },
);

UserSchema.post("validate", async function (user) {
  user.password = bcrypt.hashSync(user.password, 10);
});

export const User = models?.User || model<IUser>("User", UserSchema);
