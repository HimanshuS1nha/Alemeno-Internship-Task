import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import Button from "../../components/ui/button";

import { useUser } from "../../hooks/use-user";

import { users } from "../../dummy-data/users";

import {
  loginValidator,
  type loginValidatorType,
} from "../../validators/login-validator";

const LoginPage = () => {
  const setUser = useUser((state) => state.setUser);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<loginValidatorType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginValidator),
  });

  const { mutate: handleLogin, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (values: loginValidatorType) => {
      await new Promise((resolve) => setTimeout(() => resolve(""), 1000)); // Mocking delay

      const user = users.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );
      if (!user) {
        throw new Error("Invalid credentials");
      }

      return { message: "Logged in successfully", user };
    },
    onSuccess: (data) => {
      toast.success(data.message);
      setUser(data.user);
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return (
    <div className="w-full h-[100dvh] flex items-center justify-center bg-gray-100/70">
      <div className="w-[30%] p-4 bg-white shadow-xl shadow-gray-300 flex flex-col items-center gap-y-9 rounded-xl">
        <div className="flex gap-x-2.5 items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgvPo5heMAPJneHkLuQR-lcdz43y_RQTPSQ&s"
            alt="EducationHub"
            className="size-12 rounded-full"
          />
          <p className="text-lg font-bold">Education Hub</p>
        </div>

        <p className="text-2xl font-bold text-indigo-600">
          Login to your account
        </p>

        <form
          className="flex flex-col gap-y-6 w-full"
          onSubmit={handleSubmit((data) => handleLogin(data))}
        >
          <div className="flex flex-col gap-y-3">
            <label htmlFor="email" className="font-semibold ml-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your email"
              required
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-sm text-rose-600">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="password" className="font-semibold ml-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your password"
              required
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-sm text-rose-600">{errors.password.message}</p>
            )}
          </div>

          <Button disabled={isPending}>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
