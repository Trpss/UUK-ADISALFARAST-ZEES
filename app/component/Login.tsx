import React from 'react';

function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500" 
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              required 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500" 
              placeholder="********"
            />
          </div>

          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-500 transition duration-200">Login</button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Belum punya akun? <a href="#" className="text-purple-600 hover:underline">Daftar di sini</a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
