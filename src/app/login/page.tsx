"use client";
import { Input } from "@/app/components/input";
import { Button } from "@/app/components/ui/button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginInputs, IRegisterInputs } from "@/app/register/types";
import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ILoginInputs>();

  const onSubmit: SubmitHandler<ILoginInputs> = async (data) => {
    await signIn("credentials", { email: data.email, password: data.password });
    // try {
    //   const res = await fetch("/api/login", {
    //     method: "POST",
    //     body: JSON.stringify({ data }),
    //     headers: { "Content-Type": "application/json" },
    //   });
    //   if ((res as Response).ok) {
    //     const data = await res.json();
    //     toast.success("Login successfully");
    //     router.push("/");
    //   }
    //   if (!(res as Response).ok) {
    //     const data = await res.json();
    //     toast.error(data.err ? `Login failed` : data.error);
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };
  return (
    <section className={"pt-8"}>
      <h1 className={"text-center text-primary text-4xl"}>Login</h1>
      <form
        className={"mx-auto flex flex-col gap-4 items-center max-w-xl mt-4"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          disabled={isLoading}
          label={"E-mail"}
          placeholder={"Enter your e-mail"}
          isError={!!errors.email}
          errorMessage={"Enter valid email"}
          {...register("email", {
            required: true,
            pattern: /^\w+@\w{2,}\.\w{2,5}$/i,
          })}
        />
        <Input
          disabled={isLoading}
          label={"Password"}
          placeholder={"Enter your password"}
          isError={!!errors.password}
          errorMessage={"This field is required"}
          {...register("password", {
            required: true,
            min: 6,
            max: 255,
            validate: (value, formValues) => {
              if (value.length < 6) return "min length is 6";
            },
          })}
        />
        <Button
          variant={"contained"}
          buttonClass={"rounded-xl"}
          className={"w-full"}
          loading={isLoading}
        >
          Login
        </Button>
        <div className={"text-gray-500"}>or login with provider</div>
        <Button
          variant={"outlined"}
          buttonClass={"rounded-xl"}
          className={"w-full"}
        >
          <div className={"flex w-full justify-center items-center gap-4"}>
            <img
              src="/googleIcon.png"
              alt="google icon"
              className={"w-6 h-6"}
            />
            Login with google
          </div>
        </Button>
        <div>
          Haven't account?{" "}
          <Link
            href={"/register"}
            className={
              "text-red-500 font-semibold active:brightness-90 hover:text-red-600 hover:underline"
            }
          >
            Register here
          </Link>
        </div>
      </form>
    </section>
  );
}
