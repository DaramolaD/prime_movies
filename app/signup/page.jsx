"use client"

import React, { useState } from "react";
import classes from "./signup.module.css";
import { AiOutlineFileImage } from "react-icons/ai";
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
// import { request } from "../../util/fetchApi";

const Signup = () => {
  const [state, setstate] = useState({});
  const [data, setData] = useState({...state});
  const [classcheck, setClasscheck] = useState(true)
  const router = useRouter()
  const handleState = (e) => {
    setstate((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const headers = {
      //   "Content-Type": "application/json",
      // };
      // const data = await request("/auth/register", "POST", headers, {
      //   ...state
      // });
      localStorage.setItem("user_data", JSON.stringify(state))
      setClasscheck(false)
      // router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classcheck ? classes.container : classes.container2}>
      <div className={classes.wrapper}>
        <h2>Sign Up</h2>
        <form className={classes.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username..."
            required
            onChange={handleState}
          />
          <input
            type="email"
            name="email"
            placeholder="Email..."
            required
            onChange={handleState}
          />
          <input
            type="password"
            name="password"
            placeholder="Password..."
            required
            onChange={handleState}
          />
          <button type="submit">Register</button>
          {/* <p>
            Already have an account <Link href="/signin">Sign In</Link>
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default Signup;
