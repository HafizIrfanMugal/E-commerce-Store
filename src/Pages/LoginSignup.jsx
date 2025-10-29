import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";
const LoginSignup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // toggle between login & signup
  const { login, signup, error } = useAuth();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (isLogin) {
      login(data.email, data.password);
      navigate("/");
    } else {
      signup(data.username, data.email, data.password);
    }
  };
  return (
    <>
      <div className="h-screen p-24 flex flex-col items-center gap-10 bg-black font-stretch-expanded ">
        <h1 className="text-2xl mt-10 font-bold text-white ">
          {isLogin ? "User Login" : "User Sign In"}
        </h1>
        {error && <p className="text-red-400">{error}</p>}

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-10 border-1 border-gray-200 w-75 sm:w-90 py-10 rounded-2xl items-center">
            {!isLogin && (
              <>
                <input
                  className="border-1 border-gray-300 p-2 w-60 rounded-3xl px-8 text-white bg-green-950"
                  type="text"
                  placeholder="Your Name"
                  {...register("username", {
                    required: "username required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters",
                    },
                    maxLength: {
                      value: 15,
                      message: "Username cannot exceed 15 characters",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9_]+$/,
                      message:
                        "Only letters, numbers, and underscores are allowed",
                    },
                  })}
                />
                {errors.username && (
                  <p className="text-red-400">{errors.username.message}</p>
                )}
              </>
            )}

            <input
              className="border-1 border-gray-300 p-2 w-60 rounded-3xl px-8 text-white bg-green-950"
              type="email"
              placeholder="Email Adress"
              {...register("email", {
                required: "email required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-400">{errors.email.message}</p>
            )}
            
            <div className="relative">
            <input
              className="border-1 border-gray-300 p-2 w-60 rounded-3xl px-8 text-white bg-green-950"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },

                maxLength: {
                  value: 16,
                  message: "Password must be 16 characters long",
                },

                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/,
                  message:
                    "Password must include uppercase, lowercase, number, and special character",
                },
              })}
            />
            <button
              className="text-white absolute top-2 right-2 cursor-pointer shadow-2xl hover:shadow-amber-10"
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? (
                <i className="bi bi-eye-slash-fill text-lg"></i>
              ) : (
                <i className="bi bi-eye-fill text-lg"></i>
              )}
            </button>
            </div>
            {errors.password && (
              <p className="text-red-400">{errors.password.message}</p>
            )}
            <input
              className="text-lg font-bold bg-white p-1 w-60 rounded-3xl cursor-pointer hover:bg-gray-100"
              type="submit"
              value={isLogin ? "Login" : "Signup"}
            />
            <p
              className="text-white text-sm cursor-pointer hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin
                ? "Don't have an account? Signup"
                : "Already have an account? Login"}
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginSignup;
