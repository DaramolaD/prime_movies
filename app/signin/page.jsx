"use client"

import React, { useState } from 'react';
import classes from './signin.module.css';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { request } from '../../util/fetchApi';

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const handleLogin = async(e) => {
    e.preventDefault()
    try {
      const options = {
        'Content-Type': 'application/json'
      }
      const data = await request('/auth/login', "POST", options, {email, password})
      router.push("/")
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Sign In</h2>
        <form className={classes.form} onSubmit={handleLogin}>
          <input type="email" placeholder='Email...' onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit">Sign in</button>
          <p>Don't have an account? <Link href="/signup">Sign up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signin