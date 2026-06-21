"use client";

import { useState } from "react";
import { api } from "@/lib/axios/axios";
import { Eye, EyeOff } from "lucide-react";

type LoginFormData = {
  email: string;
  password: string;
};

type LoginResponse = {
  token?: string;
  user?: unknown;
};

export default function AuthLogin() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await api.post<LoginResponse>("/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
      }

      console.log(user);

      window.location.href = "/";
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center px-4 mt-10">
      <div className="w-full max-w-md rounded-2xl border border-cyan-100 bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="mt-4 text-3xl font-bold text-slate-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-slate-500">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 pr-12 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <a
              href="/forgot-password"
              className="text-sm text-cyan-600 hover:text-cyan-700"
            >
              Forgot Password?
            </a>
          </div>

          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-600 disabled:opacity-70"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          <a
            href="/register"
            className="font-semibold text-cyan-600 hover:underline"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}