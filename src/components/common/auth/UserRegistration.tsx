'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { Button, Input } from '@heroui/react';
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { userRegistrationValidationSchema } from '@/components/validation/formValidation';
import { getUserLoginRoutePath } from '@/routes/routes';
import { generateToken } from '@/utils/auth';
import toast from 'react-hot-toast';

const initialValues = {
    username: '',
    password: '',
}


export default function UserRegistration() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: userRegistrationValidationSchema,
        onSubmit: async (values) => {
            try {
                const token = await generateToken({ username: values.username });
                console.log('Registration successful, JWT token:', token);
                toast.success('Registration Successful! Please log in.');
            } catch (error) {
                console.error('Registration failed:', error);
                toast.error('Registration failed. Please try again.');
            }
        }
    })

    return (
        <div className="layout_container">
            <div className="text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-lg m-auto p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg border"
                >
                    <div className="mb-12">
                        <h2 className="large_heading text-center">Create Account ✨</h2>
                        <p>Sign up to get started</p>
                    </div>

                    <form onSubmit={handleSubmit} className="form_wrapper mb-2">
                        <div className="form_input_field_wrapper_with_label">
                            {/* username field */}
                            <Input
                                type="text"
                                variant="bordered"
                                label={<span>Username<span className="required_icon">*</span></span>}
                                placeholder="Enter your username"
                                startContent={<FaUser />}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                                name="username"
                                labelPlacement="outside"
                                isInvalid={!!(errors.username && touched.username)}
                            />
                            {errors.username && touched.username ? (
                                <p className="error_message">{errors.username}</p>
                            ) : null}
                        </div>

                        {/* password field */}
                        <div className="form_input_field_wrapper_with_label">
                            <Input
                                type={showPassword ? "text" : "password"}
                                variant="bordered"
                                label={<span>Password<span className="required_icon">*</span></span>}
                                placeholder="Enter your password"
                                startContent={<FaLock />}
                                endContent={
                                    <button type="button" onClick={togglePasswordVisibility}>
                                        {showPassword ? <FaEyeSlash className="w-5 h-5 text-gray-500" /> : <FaEye className="w-5 h-5 text-gray-500" />}
                                    </button>
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                name="password"
                                labelPlacement="outside"
                                isInvalid={!!(errors.password && touched.password)}
                            />
                            {errors.password && touched.password ? (
                                <p className="error_message">{errors.password}</p>
                            ) : null}

                        </div>

                        {/* submit button */}
                        <Button className="btn_global rounded_lg_btn bg_primary full_width" type="submit"> Sign Up</Button>
                    </form>

                    {/* extra links */}
                    <p>Already have an account?&nbsp;
                        <Link href={getUserLoginRoutePath()} className="">Sign In</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}