import mongoose from "mongoose";
import { User } from "@/app/models/user";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  let createdUser: string;
  try {
    const mongo = await mongoose.connect(
      process.env.NEXT_PUBLICK_MONGODB_URL as string,
    );
  } catch (err) {
    console.log("connect to db", err);
  }

  try {
    const isExist = await User.exists({ email: body.email });
    if (!!isExist) {
      return Response.json(
        { error: "User with this email already exist!" },
        { status: 400 },
      );
    }

    createdUser = await User.create(body);
    // @ts-ignore
    const { password, ...others } = createdUser._doc;
    return Response.json({ data: others });
  } catch (err) {
    console.log("creating user", err);
  }
}
