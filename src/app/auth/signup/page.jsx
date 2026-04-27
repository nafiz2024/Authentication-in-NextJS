"use client";

import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { toast } from "react-toastify";

const inputClassName =
  "h-13 w-full rounded-2xl border border-white/10 bg-white px-4 text-slate-900 shadow-sm outline-none transition duration-200 placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/20";

const labelClassName = "mb-2 text-sm font-medium text-slate-200";
const fieldErrorClassName = "mt-2 text-sm text-rose-300";

const SignUpPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    if (userData.password !== userData.confirmPassword) {
      toast.error("Passwords do not match.", {
        position: "top-center",
        autoClose: 4000,
        theme: "colored",
      });
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(`Error signing up: ${error.message}`, {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });
      return;
    }

    if (data) {
      toast.success(
        "Sign up successful! Please check your email to verify your account.",
        {
          position: "top-center",
          autoClose: 5000,
          theme: "colored",
        }
      );
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
      <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.82))] p-6 shadow-[0_25px_90px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:p-8">
        <div className="mx-auto max-w-md">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.24em] text-sky-200">
              Secure Access
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50">
              Please Sign Up
            </h1>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Create your account with a clean, focused signup flow.
            </p>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-2 rounded-full border border-white/10 bg-white/5 p-1.5">
            <Link
              href="/auth/signin"
              className="flex h-11 w-full items-center justify-center rounded-full px-4 text-sm font-semibold text-slate-300 no-underline transition-colors duration-200 hover:bg-white/10 hover:text-white"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="flex h-11 w-full items-center justify-center rounded-full bg-sky-500 px-4 text-sm font-semibold text-slate-950 no-underline shadow-[0_8px_24px_rgba(14,165,233,0.3)] transition-transform duration-200"
            >
              Sign Up
            </Link>
          </div>

          <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label className={labelClassName}>Name</Label>
              <Input
                name="name"
                className={inputClassName}
                placeholder="Write your name"
              />
              <FieldError className={fieldErrorClassName} />
            </TextField>

            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className={labelClassName}>Email</Label>
              <Input
                name="email"
                className={inputClassName}
                placeholder="Write your email"
              />
              <FieldError className={fieldErrorClassName} />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              type={isVisible ? "text" : "password"}
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label className={labelClassName}>Password</Label>
              <div className="relative">
                <Input
                  name="password"
                  type={isVisible ? "text" : "password"}
                  className={`${inputClassName} pr-12`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  onClick={() => setIsVisible((current) => !current)}
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-700"
                >
                  {isVisible ? (
                    <EyeSlash className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
              <Description className="mt-2 text-xs leading-6 text-slate-400">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError className={fieldErrorClassName} />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="confirmPassword"
              type={isConfirmVisible ? "text" : "password"}
              validate={(value) => {
                if (value.length < 8) {
                  return "Confirm password must be at least 8 characters";
                }
                return null;
              }}
            >
              <Label className={labelClassName}>Confirm Password</Label>
              <div className="relative">
                <Input
                  name="confirmPassword"
                  type={isConfirmVisible ? "text" : "password"}
                  className={`${inputClassName} pr-12`}
                  placeholder="Re-enter your password"
                />
                <button
                  type="button"
                  aria-label={
                    isConfirmVisible
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  onClick={() => setIsConfirmVisible((current) => !current)}
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-700"
                >
                  {isConfirmVisible ? (
                    <EyeSlash className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
              <Description className="mt-2 text-xs leading-6 text-slate-400">
                Re-type the same password to confirm your account setup.
              </Description>
              <FieldError className={fieldErrorClassName} />
            </TextField>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-center">
              <Button
                className="h-12 rounded-full bg-sky-500 px-6 font-semibold text-slate-950 hover:bg-sky-400"
                type="submit"
              >
                <Check />
                Submit
              </Button>
              <Button
                className="h-12 rounded-full border border-white/10 bg-white/90 px-6 text-slate-900 hover:bg-white"
                type="reset"
                variant="secondary"
              >
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
