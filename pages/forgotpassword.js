import React from 'react'

const forgotpassword = () => {
  return (
    <>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <h1 className="text-3xl text-black text-center mb-8">Forgot Password ?</h1>
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            
            <label className='my-3 text-xl text-black' >Enter your registered email</label>
            <input
              type="text"
              className="block my-3 border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email" />

            <button type="submit" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Reset Password</button>

          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a className="no-underline border-b border-blue text-blue mx-2" href="/login">
              Log in
            </a>.
          </div>
        </div>
      </div>
    </>
  )
}

export default forgotpassword