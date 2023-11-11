"use client"
import { useState, useEffect } from "react";
import Signin from "../signin/page";
import Signup from "../signup/page";
import './page.css'


interface UserDetails {
  username: string;
  email: string;
}

// export default async function Dashboard() {
const Dashboard = () => {
  const [signbtn, setSignbtn] = useState(true)
  const [details, setDetails] = useState<UserDetails>({ username: "", email: "" })
  const getUser = () => {
    const userInfo = localStorage.getItem("user_data")
    if (userInfo) {
      const userData = JSON.parse(userInfo)
      setDetails((prev) => {
        return { ...prev, userData };
      });
    } else {
      return []
    }
  }
  const viewDetials = (e: any) => {
    e.preventDefault()
    setSignbtn(!signbtn)
  }
  const userDetailChange = (e: any) => {
    e.preventDefault()
    
    setDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  const onsubmitChange = (e:any) =>{
    e.preventDefault()
    localStorage.setItem("user_data", JSON.stringify(details))
    setSignbtn(!signbtn)
  }
  const deleteChange = (e:any) =>{
    e.preventDefault()
    localStorage.setItem("user_data", JSON.stringify({}))
    setDetails({ username: "", email: "" });
  }

  useEffect(() => {
    return () => {
      getUser()
    };
  }, []);
  

  return (
    <div className="dashboard">
      <h3>Welcome to Prime Movies</h3>
      <div className="detials">
        <h2 className="h2">Hello {details.username}</h2>
        <p>These are your details: </p>
        <div className="userInfo">
          <p>Username: <span>{details.username}</span></p>
          <p>Email: <span>{details.email}</span></p>
        </div>
      </div>
      <div className="btnCont">

        <button className="button" onClick={viewDetials}>Edit Profile</button>
        <button className="button" onClick={deleteChange}>Delete Profile</button>
      </div>
      {!signbtn ? <div className="userDetaiInfo">
          <form className="formCont" onSubmit={onsubmitChange}> 
            <input name="username" value={details.username}type="username" placeholder='Username...' onChange={userDetailChange} />
            <input name="email" value={details.email}type="email" placeholder='Email...' onChange={userDetailChange} />
            <button type="submit">Update</button>
          </form>
        </div> : ""
      }
      {/* {signbtn && } */}
      {/* <Signin /> */}
      {/* <Signup /> */}

    </div>
  );
}

export default Dashboard