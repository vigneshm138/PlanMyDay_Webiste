import React, { useEffect, useState } from "react";
import { Authuse } from "../Auth";
import axios from "axios";
import { CiUser } from "react-icons/ci";
import './Profile.css'

const Profile = () => {
  const user = Authuse();
  const [heading, setHeading] = useState("");
  const [type, settype] = useState("education");
  const [tips, setTips] = useState("");
  const [post, setpost] = useState([]);
  const [like,setlike]=useState(0)

  useEffect(() => {
    axios
      .get("http://localhost:4001/post/get")
      .then((res) => setpost(res.data.filter(item=>item.whoPost!==user.userId)));
  }, [like]);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4001/post/post", {
      type,
      heading,
      tips,
      whoPost: user.userId,
      whoSendName:user.userName
    });
  };


  const handleLike=()=>{
    setlike(like+1)
  }
  return (
    <div className="suggg">
      {user.userName}
      {user.userId}

      {post.map((item) => {
        return (
          <ul style={{border:"1px solid black",margin:"10px",listStyle:"none"}}>
            <h2 style={{backgroundColor:"yellowgreen",width:"fit-content"}}><CiUser /> {item.whoSendName}</h2>
            <hr/>
            <li>Type : {item.type}</li>
            <li>title : {item.heading}</li>
            <li>plan Like this :: {item.tips}</li>
          </ul>
        );
      })}

      <div className="sugg-form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Type</label>
            <select value={type} onChange={(e) => settype(e.target.value)}>
              <option value={"education"}>education</option>
            </select>
          </div>
          <div>
            <label>heading</label>
            <input
              onChange={(e) => setHeading(e.target.value)}
              value={heading}
              placeholder="ex:how become a developer"
            />
          </div>
          <div>
            <label>Tips</label>
            <textarea
              placeholder="give me some Tips"
              value={tips}
              onChange={(e) => setTips(e.target.value)}
            />
          </div>
          <button type="submit">post</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
