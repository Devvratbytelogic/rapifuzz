import * as Yup from 'yup';

export const userLoginValidationSchema = Yup.object({
  username: Yup.string().matches(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores").min(3, "Username must be at least 3 characters long").max(20, "Username must be at most 20 characters long").required("Username is required"),

  password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/, "Password must include A-Z, a-z, 0-9, and a special character (@, #, $, etc.)").min(8, "Password must be at least 8 characters long").max(20, "Password must be at most 20 characters long").required("This field is required"),
});


export const userRegistrationValidationSchema = Yup.object({
  username: Yup.string().min(4, "Username must be at least 4 characters").required("Username is required"),
  password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/, "Password must include A-Z, a-z, 0-9, and a special character (@, #, $, etc.)").min(8, "Password must be at least 8 characters long").max(20, "Password must be at most 20 characters long").required("This field is required"),
});
// export const userRegistrationValidationSchema = Yup.object({
//     fullName: Yup.string().required("Full Name is required"),
//     email: Yup.string().email("Invalid email format").required("Email is required"),
//     username: Yup.string().min(4, "Username must be at least 4 characters").required("Username is required"),
//     password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
//     confirmPassword: Yup.string()
//         .oneOf([Yup.ref("password"), ""], "Passwords must match")
//         .required("Confirm password is required"),
// });