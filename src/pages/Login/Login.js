import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (newEmail === "") {
      setEmailError("");
    } else if (!validateEmail(newEmail)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const canSubmit = email && password && !emailError;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (canSubmit) {
      console.log('Login Successful');
    } else {
      console.log('Please fill in all fields');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div
        className="absolute top-0 left-0 bg-cover bg-center w-full"
        style={{ backgroundImage: "url('https://AshishBhalala11.github.io/Static-login-page/img/login_bg.png')", height: "35%" }}
      ></div>
      <div
        className="bg-white w-5/12 absolute bottom-0"
        style={{ borderRadius: "6px" }}
      >
        <div
          className="flex justify-center items-center w-full h-14 text-3xl font-semibold"
          style={{
            boxShadow: "0px 3px 7px #00000029",
            borderRadius: "6px 6px 0px 0px",
          }}
        >
          <div>amazon</div>
        </div>
        <h2 className="text-3xl text-center mt-3 text-green-600">Login</h2>
        <div className="flex justify-center items-center mt-6">
          <img
            className="w-7/12"
            src="https://AshishBhalala11.github.io/Static-login-page/img/tree.png"
            alt="Tree Icon missing"
          ></img>
        </div>
        <form className="w-7/12 mx-auto mb-10" onSubmit={handleSubmit}>
          <div>
            <div className="mt-4">
              {/* <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label> */}
              <input
                type="email"
                id="email"
                name="email"
                className=" p-2 block w-full rounded-md border-b border-gray-300 placeholder-green-600"
                value={email}
                placeholder="Email"
                onChange={handleEmailChange}
                required
              />
              {emailError && (
                <div>
                  <img className="inline" src="https://AshishBhalala11.github.io/Static-login-page/img/error.svg" alt=""></img>
                  <span className="text-rose-600 text-sm mt-1 ml-1">
                    {emailError}
                  </span>
                </div>
              )}
              {!email && (
                <div>
                  <img className="inline" src="https://AshishBhalala11.github.io/Static-login-page/img/error.svg" alt=""></img>
                  <span className="text-rose-600 text-sm mt-1 ml-1">
                    The email is required
                  </span>
                </div>
              )}
            </div>
            <div className="mt-2">
              {/* <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label> */}
              <input
                type="password"
                id="password"
                name="password"
                className="p-2 block w-full rounded-md border-b border-gray-300 placeholder-green-600"
                value={password}
                placeholder="Password"
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button
              type="submit"
              className={`bg-green-600 text-white w-full py-3 rounded-2xl mt-6 ${
                canSubmit
                  ? "hover:bg-green-600"
                  : "cursor-not-allowed opacity-90"
              }`}
              disabled={!canSubmit}
            >
              Sign In
            </button>
          </div>
          <div className="flex justify-between text-sm mt-3">
            <div>Forget Password?</div>
            <div className="text-rose-600">New User? Sign Up</div>
          </div>
          <div className="text-sm mt-3 text-center">or</div>
          <button className="flex bg-blue-600 text-white w-full p-1 mt-6 items-center">
						<img className="" src="https://AshishBhalala11.github.io/Static-login-page/img/google.png" alt=""></img>
						<div className="uppercase w-full text-center">Continue with Google</div>
					</button>
					<button className="flex bg-blue-600 text-white w-full p-1 mt-6 items-center">
						<img className="" src="https://AshishBhalala11.github.io/Static-login-page/img/facebook.png" alt=""></img>
						<div className="uppercase w-full text-center">Continue with Facebook</div>
					</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
