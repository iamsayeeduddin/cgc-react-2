import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ setUserData }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const e = {};
    if (!email.trim()) e.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) e.email = "Enter a valid email.";
    if (!password) e.password = "Password is required.";
    else if (password.length < 6) e.password = "Password must be at least 6 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setServerError("");
    if (!validate()) return;
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/users/login", { email, password });
      if (response.data.success) {
        console.log("Login Successfully!");
        localStorage.setItem("user", JSON.stringify(response.data.data));
        setUserData(response.data.data);
        navigate("/");
      } else {
        setServerError(response?.data?.message);
      }
    } catch (err) {
      setServerError(err?.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    // Replace these with real social login redirects
    alert(`Social login with ${provider} (demo)`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="max-w-md w-full mx-auto p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-2 text-gray-900">Sign in to your account</h2>
      <p className="text-sm text-gray-600 mb-6">Welcome back — enter your details to continue.</p>

      {serverError && (
        <div role="alert" className="mb-4 text-sm text-red-800 bg-red-100 px-3 py-2 rounded">
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-400 transition disabled:opacity-50 ${
              errors.email ? "border-red-300" : "border-gray-200"
            }`}
            placeholder="you@example.com"
            required
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div className="mb-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={errors.password ? "true" : "false"}
              aria-describedby={errors.password ? "password-error" : undefined}
              className={`w-full px-3 py-2 rounded-lg border pr-12 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-400 transition disabled:opacity-50 ${
                errors.password ? "border-red-300" : "border-gray-200"
              }`}
              placeholder="Enter your password"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p id="password-error" className="mt-1 text-xs text-red-600">
              {errors.password}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-4 mb-6">
          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <span className="ml-2 text-gray-700">Remember me</span>
          </label>

          <a href="#" className="text-sm text-indigo-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex justify-center items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-400 disabled:opacity-60"
        >
          {loading ? (
            <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
            </svg>
          ) : (
            "Sign in"
          )}
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-gray-200"></span>
        <span className="text-xs text-gray-500">Or continue with</span>
        <span className="h-px flex-1 bg-gray-200"></span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => handleSocialLogin("Google")}
          className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5v8.5h13.9C36.9 22.9 31 27.5 24 27.5c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.2 0 6 1.2 8.1 3.1L24 9.5z" />
            <path fill="#4285F4" d="M42.4 20.9c.6 1.7.9 3.5.9 5.4 0 2.1-.4 4.1-1.1 6h-16v-8.5h8.8c-.4-1.5-1.2-2.8-2.3-3.8l10.7-?" />
          </svg>
          Google
        </button>

        <button
          onClick={() => handleSocialLogin("GitHub")}
          className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.5.5.5 5.5.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1C6.9 20.8 6 18.5 6 18.5c-.5-1.3-1.2-1.6-1.2-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.7-.3-5.5-1.4-5.5-6.2 0-1.4.5-2.5 1.2-3.4-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.3A11.2 11.2 0 0112 6.8c1 .01 2 .14 2.9.4 2.2-1.6 3.3-1.3 3.3-1.3.6 1.7.2 2.9.1 3.2.8.9 1.2 2 1.2 3.4 0 4.9-2.8 5.9-5.5 6.2.4.4.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0023.5 12C23.5 5.5 18.5.5 12 .5z" />
          </svg>
          GitHub
        </button>
      </div>

      <p className="mt-6 text-center text-sm text-gray-600">
        Donât have an account?{" "}
        <a href="#" className="text-indigo-600 hover:underline">
          Sign up
        </a>
      </p>
    </motion.div>
  );
}
