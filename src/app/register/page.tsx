"use client";
import { Input } from "@/app/components/input";
import { Button } from "@/app/components/ui/button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterInputs } from "@/app/register/types";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRegisterInputs>();

  const onSubmit: SubmitHandler<IRegisterInputs> = async (data) => {
    const { confirmPassword, ...others } = data;
    setIsLoading(true);
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(others),
      headers: { "Content-Type": "application/json" },
    })
      .then((res: Response) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (!data.error) {
          toast.success("Register successfully, now you can login");
          router.push("/login");
        }
        if (data.error) toast.error(data.error || "failed register request");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const currentPassword = watch()?.password || "";
  const currentPasswordConfirm = watch()?.confirmPassword || "";
  return (
    <section className={"pt-8"}>
      <h1 className={"text-center text-primary text-4xl"}>Register</h1>
      <form
        className={"mx-auto flex flex-col gap-4 items-center max-w-xl mt-4"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          disabled={isLoading}
          label={"Login"}
          placeholder={"Enter your login"}
          isError={!!errors.login}
          errorMessage={"This field is required (length 4 - 32)"}
          {...register("login", { required: true, min: 4, max: 32 })}
        />
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
            validate: (value) => {
              if (value.length < 6) return "min length is 6";
            },
          })}
        />
        <Input
          disabled={isLoading}
          label={"Confirm password"}
          placeholder={"Repeat password"}
          isError={!!errors.confirmPassword}
          errorMessage={errors.confirmPassword?.message}
          {...register("confirmPassword", {
            required: true,
            validate: () => {
              if (currentPasswordConfirm !== currentPassword)
                return "Passwords not match";
            },
          })}
        />
        <Button
          variant={"contained"}
          buttonClass={"rounded-xl"}
          className={"w-full"}
          loading={isLoading}
        >
          Register
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
          Existing account?{" "}
          <Link
            href={"/login"}
            className={
              "text-red-500 font-semibold active:brightness-90 hover:text-red-600 hover:underline"
            }
          >
            Login here
          </Link>
        </div>
      </form>
    </section>
  );
}
