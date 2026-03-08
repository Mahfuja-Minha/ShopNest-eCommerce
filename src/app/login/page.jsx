"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (!res?.error) {
      router.push("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center  px-4">
      <div className="w-full max-w-md  rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-2">
          Login to your account
        </h2>

        <p className="text-center mb-6">Enter your email and password</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>

            <input
              type="email"
              placeholder="m@example.com"
              {...register("email", { required: true })}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full border py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Continue with Google
          </button>

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-600">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
