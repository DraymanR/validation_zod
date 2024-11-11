'use client'
// import { useState } from 'react';
// import { zodResolver } from '@hookform/resolvers/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { userSchema, UserFormData } from '@/app/schemas/user';
// import { z } from 'zod';

export default function UserForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<UserFormData>({
        resolver: zodResolver(userSchema),
    });

    const onSubmit = (data: UserFormData) => {
        console.log(data);
    };

    return (
        <form className="space-y-4 p-6 bg-white shadow-md rounded-md" onSubmit={handleSubmit(onSubmit)} >
            <h3>פרטים אישיים:</h3>
            <div>
                <label className="block text-gray-700">Identity Number</label>
                <input {...register("identityNumber")} className="w-full mt-1 p-2 border border-gray-300 rounded" />
                {errors.identityNumber && <p style={{ color: "red" }}>{errors.identityNumber.message}</p>}
            </div>

            <div>
                <label className="block text-gray-700">First Name</label>
                <input {...register("firstName")} className="w-full mt-1 p-2 border border-gray-300 rounded" />
                {errors.firstName && <p style={{ color: "red" }}>{errors.firstName.message}</p>}
            </div>

            <div>
                <label className="block text-gray-700" >Last Name</label>
                <input {...register("lastName")} className="w-full mt-1 p-2 border border-gray-300 rounded" />
                {errors.lastName && <p style={{ color: "red" }}>{errors.lastName.message}</p>}
            </div>

            <div>
                <label className="block text-gray-700">Date of Birth (YYYY-MM-DD)</label>
                <input className="w-full mt-1 p-2 border border-gray-300 rounded"  {...register("dateOfBirth")} />
                {errors.dateOfBirth && <p style={{ color: "red" }}>{errors.dateOfBirth.message}</p>}
            </div>
            <h3>פרטי התקשרות:</h3>
            <div>
                <label className="block text-gray-700">Email</label>
                <input className="w-full mt-1 p-2 border border-gray-300 rounded"  {...register("email")} type="email" />
                {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit" >Submit</button>
        </form>
    );
}
