import React from 'react'

const Login=()=> {
    return(
        <div
        className="flex flex-col items-center h-screen justify-center bg-gardient-to-b from-teal-600 from-50% to-gary-100 to 50% space-y-6">
            <h2 className="font-sevillana text-3xl text-white"> Employee Management System</h2>
            <div className="border shadow p-6 w-80 bg-white">
                <h2 className="text-2x1 font-bold mb-4">Login</h2>
            </div>
            <h2 className="text-2x1 font-bold mb-4">Login</h2>
            <form>
                
                <div className="mb-4">
                    <label htmlFor='email' className="block text-gary-700">Email</label>
                    <input type="email" className="w-full px-3 py-2 border" placeholder='Enter Email'/>
                </div>
                <div>
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input type="password" className="w-full px-3 py-2 border" placeholder='******'/>
                </div>
                <div className="mb-4 flex items-center jsutify-between">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox"/>
                        <span className="text-teal-600"></span>
                    </label>
                    <a href="#" className="text-teal-600">
                        Forget password?
                    </a>
                </div>
                <div className="mb-4"></div>
                <button type="submit" className="w-full bg-teal-600 text-white py-2">Login</button>
            </form>
            
            
            </div>
    )
}
export default Login