"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Eye, EyeOff, LogIn, AlertCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ButtonLoader, FullPageLoader } from "@/components/ui/Loader";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Form validation schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Redirect to home page after successful login
        window.location.href = "/";
      } else {
        setSubmitStatus("error");
        setSubmitMessage(result.error || "Login failed. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isSubmitting && <FullPageLoader text="Signing you in..." />}
      <div
        ref={sectionRef}
        className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <Link
              href="/"
              className="flex items-center justify-center space-x-2 mb-8"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Bodhify.tech
              </span>
            </Link>

            <h1
              ref={titleRef}
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Welcome Back
            </h1>
            <p className="text-gray-600">Sign in to your account to continue</p>
          </div>

          {/* Login Form */}
          <Card ref={formRef}>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    {...register("email")}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      {...register("password")}
                      className={
                        errors.password ? "border-red-500 pr-10" : "pr-10"
                      }
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Status */}
                {submitStatus === "error" && (
                  <div className="p-4 rounded-lg bg-red-50 text-red-800 border border-red-200 flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5" />
                    <p className="text-sm">{submitMessage}</p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <ButtonLoader />
                  ) : (
                    <>
                      <LogIn className="w-4 h-4 mr-2" />
                      Sign In
                    </>
                  )}
                </Button>
              </form>

              {/* Sign Up Link */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                  >
                    Sign up here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Demo Credentials */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Demo Credentials
                </h3>
                <p className="text-xs text-gray-600 mb-2">
                  Use these credentials to test the login functionality:
                </p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>
                    <strong>Email:</strong> demo@bodhify.tech
                  </p>
                  <p>
                    <strong>Password:</strong> demo123
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Login;
