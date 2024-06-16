import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from "mongoose";
import { User } from "@/app/models/user";
import * as bcrypt from "bcrypt";

const handler = NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      id: "credentials",
      credentials: {
        email: { label: "E-mail", type: "email", placeholder: "test@mail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const email = credentials?.email;
          const password = credentials?.password || "";

          await mongoose.connect(
            process.env.NEXT_PUBLICK_MONGODB_URL as string,
          );
          const user = await User.findOne({ email });
          const passwordOk =
            user && bcrypt.compareSync(password, user.password);

          if (passwordOk) {
            return user;
          }
        } catch (e) {
          console.error(e);
        }
        // const res = await fetch("/your/endpoint", {
        //   method: "POST",
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" },
        // });
        // const user = await res.json();
        //
        // if (res.ok && user) {
        //   return user;
        // }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
