import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen
                    bg-gradient-to-b from-teal-600 to-gray-100 space-y-6">
      <h2 className="font-sevillana text-3xl text-white">
        Employee Management System
      </h2>

      <div className="border shadow p-6 w-80 bg-white space-y-4">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border"
              placeholder="Enter Email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border"
              placeholder="******"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-teal-600">Remember me</span>
            </label>
            <a href="#" className="text-teal-600">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
