import axios from "axios";
import React, { useEffect, useState } from "react";
import { Authuse } from "../Auth";
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setuser] = useState([])


  const userName=Authuse()

  useEffect(()=>{
    axios.get("http://localhost:4001/login/get").then(res=>setuser(res.data))
  },[])

  const handleSubmit=(e)=>{
    e.preventDefault()
    const findUser = user.find(x => x.email === email)
    if (findUser){
        if (findUser.password === password) {
            userName.login(findUser.name,findUser._id)

        }
    }
  }
  return (
    <div>
      <div className="login">
        <h1>login </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Email id</label>
            <input
              type="email"
              placeholder="Enter Your mail id"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>

      </div>
    </div>
  );
};

export default Login;
