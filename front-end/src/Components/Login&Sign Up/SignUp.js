import axios from "axios";
import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3090/users",{name,email,password}).then(res=>console.log(res))
  }
  return (
    <div>
      <div className="login">
        <h1>Sign up </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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

export default SignUp;
