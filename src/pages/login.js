// pages/auth.js

import { useState } from 'react';
import { motion } from 'framer-motion';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white bg-opacity-90 p-10 rounded-md shadow-md max-w-md w-full flex flex-col items-center"
      >
        <motion.div className="flex mb-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`cursor-pointer text-2xl mx-2 ${
              isLogin ? 'text-blue-600 font-semibold' : 'text-gray-600'
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`cursor-pointer text-2xl mx-2 ${
              !isLogin ? 'text-blue-600 font-semibold' : 'text-gray-600'
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-6 text-gray-800"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isLogin ? (
            <>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-600 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-blue-600 hover:underline cursor-pointer"
                  onClick={() => setIsLogin(true)}
                >
                  Forgot Password?
                </motion.button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Login
                </motion.button>
              </div>
            </>
          ) : (
            <>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-600 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-blue-600 hover:underline cursor-pointer "
                  onClick={() => setIsLogin(true)}
                >
                  Already have an account? Login
                </motion.button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Sign Up
                </motion.button>
              </div>
            </>
          )}
        </motion.form>
      </motion.div>
    </div>
  );
};

export default AuthPage;


