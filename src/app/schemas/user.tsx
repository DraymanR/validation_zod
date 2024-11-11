import { z } from 'zod';

export const userSchema = z.object({
    //  identityNumber: z.number().positive().min(9, "Identity number must be at least 9 characters"),
    identityNumber: z
        .preprocess((val) => Number(val), z.number().positive("ID number must be a positive number"))
        .refine((val) => val.toString().length === 9, { message: "Identity number must be exactly 9 digits long" }),
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    // dateOfBirth: z.date(),
    dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
    email: z.string().email("Invalid email address"),
});

export type UserFormData = z.infer<typeof userSchema>;