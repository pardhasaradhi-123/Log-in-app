import React, { useState } from "react";
import { Link } from "react-router-dom";
import videoBG from "./assets/login bg video.mp4";
import { toast, ToastContainer } from "react-toastify";

export default function Sign() {
  const [formData, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    usename: "",
    email: "",
    password: "",
  });

  const inputFields = [
    {
      id: 0,
      label: "Username",
      type: "text",
      name: "username",
      placeholder: "Enter Name",
    },
    {
      id: 1,
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter Email",
    },
    {
      id: 2,
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Enter Password",
    },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validation = () => {
    const newErrors = {
      username: "",
      email: "",
      password: "",
    };
    if (formData.username === "") {
      newErrors.username = "Username is required";
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.password === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).every((key) => newErrors[key] === "");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      console.log(formData);
      setFormdata({ username: "", email: "", password: "" });
      toast.success(`${formData.username} sign-in successfull !`);
    }
  };
  return (
    <>
      <video
        src={videoBG}
        autoPlay
        loop
        muted
        className="z-10 w-full object-cover h-[100vh]"
      />
      <div className="flex justify-center">
        <div className="absolute top-0 z-20 translate-y-32">
          <div className="flex flex-col min-w-96 border-2 border-black rounded-md  shadow-xl">
            <div className="flex flex-row justify-around">
              <div className="py-8">
                <h1 className="text-2xl font-semibold pb-2 text-white">
                  Sign In
                </h1>
                <div className="bg-blue-500 border-blue-500 w-full h-2 rounded-full"></div>
              </div>
              <Link
                to="/login"
                className="text-2xl py-8 font-semibold text-white"
              >
                {" "}
                Log In
              </Link>
            </div>
            <form className="flex flex-col p-4" onSubmit={handleSubmit}>
              {inputFields.map((field) => {
                return (
                  <div key={field.id}>
                    <label
                      htmlFor={field.label}
                      className="font-semibold text-white"
                    >
                      {field.label}:
                    </label>
                    <div className=" flex flex-col gap-1">
                      <input
                        className={`w-full outline-none border-gray-500 border-2 rounded-md my-3 p-2  focus:border-blue-400 ${
                          errors[field.name] ? "border-red-500" : ""
                        }`}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}
                      />
                      {errors[field.name] && (
                        <div className="text-red-700 text-sm">
                          {errors[field.name]}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              <button className="bg-blue-400 p-2 rounded-md hover:bg-blue-500 font-semibold text-xl my-4">
                SIGN IN
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
