import { useState } from "react"
import Header from "./Header"

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSigninForm(!isSigninForm);
  }
  return (
    <div className="relative">
        <Header />
        <div>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg" alt="banner" />
        </div>
        <form className="w-3/12 bg-black p-12 absolute mx-auto left-0 right-0 top-1/3">
            <h1 className="font-bold text-3xl py-4 text-white ">{isSigninForm ? "Sign In" : "Sign Up"}</h1>
            {!isSigninForm && (
              <input type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-700" />
              )}
            <input type="text" placeholder="Email ID" className="p-4 my-4 w-full bg-gray-700" />
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700" />
            <button className="flex p-4 my-6 bg-red-700 w-full text-white rounded-lg">Sign In</button>
            <p className="text-white cursor-pointer" onClick={toggleSignInForm}>{isSigninForm ? "New to Netflix? Sign up Now." : "Already registred? Sign In Now."}</p>
        </form>
    </div>
  )
}

export default Login