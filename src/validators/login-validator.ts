import { z } from "zod";

export const loginValidator = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(1, { message: "Password must be atleast 8 characters long" }),
});

export type loginValidatorType = z.infer<typeof loginValidator>;
