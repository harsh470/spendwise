import React, { useContext } from "react";

import { authContext } from "@/lib/store/auth-context";

import { FcGoogle } from "react-icons/fc";

function SignIn() {
  const { googleLoginHandler } = useContext(authContext);

  return (
    <main className="container max-w-xl px-6 mx-auto mt-16">
  <h1 className="mb-10 text-5xl font-extrabold text-center text-white">
    Spend<span className="text-blue-900">Wise</span>
  </h1>

  <div className="overflow-hidden bg-white shadow-lg rounded-xl">
    <div className="h-64">
      <img
        className="object-cover w-full h-full"
        src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg"
        alt="Hero"
      />
    </div>
    <div className="px-6 py-8">
      <h3 className="mb-4 text-xl font-semibold text-center text-gray-700">
        Welcome Back!
      </h3>
      <p className="text-center text-gray-500">
        Please sign in to continue and manage your expenses effortlessly.
      </p>

      <button
        onClick={googleLoginHandler}
        className="flex items-center justify-center w-full gap-3 p-3 mt-8 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-300 transition focus:ring focus:ring-blue-300"
      >
        <FcGoogle className="text-2xl" />
        Sign in with Google
      </button>
    </div>
  </div>
</main>

  );
}

export default SignIn;