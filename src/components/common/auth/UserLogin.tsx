'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { Button, Input } from '@heroui/react';
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';
import { userLoginValidationSchema } from '@/components/validation/formValidation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getUserRegistrationRoutePath } from '@/routes/routes';
import { authenticateUser, generateToken } from '@/utils/auth';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { useRouter } from 'nextjs-toploader/app';

const initialValues = {
    username: '',
    password: ''
}

export default function UserLogin() {
    const router=useRouter()
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: userLoginValidationSchema,
        onSubmit: async (values) => {
            // Authenticate user
            const isAuthenticated = authenticateUser(values.username, values.password);
            if (isAuthenticated) {
                try {
                    const token = await generateToken({ username: values.username });
                    // Store token in a cookie with secure attributes
                    Cookies.set('authToken', token, {
                        expires: 1 / 24, // Expires in 1 hour
                    });
                    toast.success('Login Successful!');
                    router.push(`/`)
                } catch (error) {
                    console.error('Token generation failed:', error);
                    toast.error('Login failed. Please try again.');
                }
            } else {
                toast.error('Invalid credentials');
            }
        }
    })

    return (
        <div className="layout_container">
            <div className='text-center'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md m-auto p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg border"
                >
                    <div className='mb-12'>
                        <h2 className="large_heading text-center">Welcome Back 👋</h2>
                        <p>Login to continue</p>
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
                        <Button className="btn_global rounded_lg_btn bg_primary full_width" type="submit"> Sign In</Button>
                    </form>


                    {/* extra links */}
                    <p>Don’t have an account?&nbsp;
                        <Link href={getUserRegistrationRoutePath()} className="">Sign Up</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}