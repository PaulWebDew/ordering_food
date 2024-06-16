// import mongoose from "mongoose";
// import { User } from "@/app/models/user";
// import * as bcrypt from "bcrypt";
//
// export async function POST(req: Request) {
//   const { data } = await req.json();
//   try {
//     await mongoose.connect(process.env.NEXT_PUBLICK_MONGODB_URL as string);
//   } catch (e) {
//     console.error(e);
//   }
//   const user = await User.findOne({ email: data.email });
//   if (!user) {
//     return Response.json(
//       { error: "User with this email not exist!" },
//       { status: 400 },
//     );
//   }
//   const passIsMatch = await bcrypt.compare(data.password, user.password);
//   if (!passIsMatch) {
//     return Response.json(
//       { error: "Wrong email or password!" },
//       { status: 400 },
//     );
//   }
  return Response.json({ data: user });
}
