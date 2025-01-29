import { z } from "zod";

export const loginSchemas = z.object({
    email: z.string().email(),
    password: z.string().min(1, "Password is required"),
});

export const registerSchemas =  z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.string().email(),
    password: z.string().min(8, "Minimum of 8 characters required"),
});