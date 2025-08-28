'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { Button, Input } from '@heroui/react';
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { userRegistrationValidationSchema } from '@/components/validation/formValidation';
import { getUserLoginRoutePath } from '@/routes/routes';

const initialValues = {
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
}


export default function UserRegistration() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: userRegistrationValidationSchema,
        onSubmit: (values) => {
            console.log("Registration values", values);
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
                        <div className='two_column_form_field_wrapper'>
                            {/* Full Name */}
                            <div className="form_input_field_wrapper_with_label">
                                <Input
                                    type="text"
                                    variant="bordered"
                                    label={<span>Full Name<span className="required_icon">*</span></span>}
                                    placeholder="Enter your full name"
                                    startContent={<FaUser className="w-5 h-5 text-gray-400" />}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.fullName}
                                    name="fullName"
                                    labelPlacement="outside"
                                    isInvalid={!!(errors.fullName && touched.fullName)}
                                />
                                {errors.fullName && touched.fullName ? (
                                    <p className="error_message">{errors.fullName}</p>
                                ) : null}
                            </div>
    
                            {/* Username */}
                            <div className="form_input_field_wrapper_with_label">
                                <Input
                                    type="text"
                                    variant="bordered"
                                    label={<span>Username<span className="required_icon">*</span></span>}
                                    placeholder="Choose a username"
                                    startContent={<FaUser className="w-5 h-5 text-gray-400" />}
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
                        </div>

                        {/* Email */}
                        <div className="form_input_field_wrapper_with_label">
                            <Input
                                type="email"
                                variant="bordered"
                                label={<span>Email<span className="required_icon">*</span></span>}
                                placeholder="Enter your email"
                                startContent={<FaEnvelope className="w-5 h-5 text-gray-400" />}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                name="email"
                                labelPlacement="outside"
                                isInvalid={!!(errors.email && touched.email)}
                            />
                            {errors.email && touched.email ? (
                                <p className="error_message">{errors.email}</p>
                            ) : null}
                        </div>

                        {/* Password */}
                        <div className="form_input_field_wrapper_with_label">
                            <Input
                                type={showPassword ? "text" : "password"}
                                variant="bordered"
                                label={<span>Password<span className="required_icon">*</span></span>}
                                placeholder="Enter your password"
                                startContent={<FaLock className="w-5 h-5 text-gray-400" />}
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

                        {/* Confirm Password */}
                        <div className="form_input_field_wrapper_with_label">
                            <Input
                                type={showConfirmPassword ? "text" : "password"}
                                variant="bordered"
                                label={<span>Confirm Password<span className="required_icon">*</span></span>}
                                placeholder="Confirm your password"
                                startContent={<FaLock className="w-5 h-5 text-gray-400" />}
                                endContent={
                                    <button type="button" onClick={toggleConfirmPasswordVisibility}>
                                        {showConfirmPassword ? <FaEyeSlash className="w-5 h-5 text-gray-500" /> : <FaEye className="w-5 h-5 text-gray-500" />}
                                    </button>
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                name="confirmPassword"
                                labelPlacement="outside"
                                isInvalid={!!(errors.confirmPassword && touched.confirmPassword)}
                            />
                            {errors.confirmPassword && touched.confirmPassword ? (
                                <p className="error_message">{errors.confirmPassword}</p>
                            ) : null}
                        </div>

                        {/* Submit Button */}
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