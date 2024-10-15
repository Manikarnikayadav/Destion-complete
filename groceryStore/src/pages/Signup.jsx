import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';  // Import axios

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);  // Loading state

  // Formik setup using initial values and Yup schema for validation
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: async (values) => {
      setLoading(true);  // Set loading to true on submit
      try {
        // Send POST request to the backend using axios
        const res = await axios.post('http://localhost:5000/api/auth/register', {
          username: values.username,
          email: values.email,
          password: values.password,
        });

        // Store the token in localStorage after successful signup
        localStorage.setItem('token', res.data.token);

        // Navigate to dashboard
        navigate('/dashboard');
      } catch (error) {
        console.error('Signup failed:', error.response?.data || error.message);
      } finally {
        setLoading(false);  // Reset loading after form submission
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-center text-2xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            {/* Username field */}
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username ? (
                <p className="text-red-500 text-sm">{formik.errors.username}</p>
              ) : null}
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              ) : null}
            </div>

            {/* Password field */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-500 text-sm">{formik.errors.password}</p>
              ) : null}
            </div>

            {/* Confirm Password field */}
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <p className="text-red-500 text-sm">
                  {formik.errors.confirmPassword}
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}  // Disable the button when loading
              className={`w-full py-2 px-4 border border-transparent rounded-md text-white ${
                loading ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-sm font-medium`}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}  {/* Show 'Signing Up...' when loading */}
            </button>
          </div>
        </form>

        {/* Login button linking to the Login page */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">Already have an account?</p>
          <Link
            to="/"
            className="inline-block text-green-500 hover:text-green-700 font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
