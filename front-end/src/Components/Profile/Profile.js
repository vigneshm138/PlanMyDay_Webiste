import React, { useEffect, useState } from "react";
import { Authuse } from "../Auth";
import axios from "axios";
import { CiUser } from "react-icons/ci";
import { AiFillLike } from "react-icons/ai";

const Profile = () => {
  const user = Authuse();
  const [heading, setHeading] = useState("");
  const [type, settype] = useState("education");
  const [tips, setTips] = useState("");
  const [post, setpost] = useState([]);
  const [like,setlike]=useState(0)

  useEffect(() => {
    axios
      .get("http://localhost:4000/posts")
      .then((res) => setpost(res.data.filter(item=>item.whoPost!==user.userId)));
  }, [like]);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/posts", {
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
    <div>
      {user.userName}
      {user.userId}


      <hr></hr>
      {post.map((item) => {
        return (
          <ul style={{border:"1px solid black",margin:"10px",listStyle:"none"}}>
            <h2 style={{backgroundColor:"yellowgreen",width:"fit-content"}}><CiUser /> {item.whoSendName}</h2>
            <li>{item.type}</li>
            <li>title : {item.heading}</li>
            <li>plan Like this :: {item.tips}</li>
          </ul>
        );
      })}

      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <labe>Type</labe>
            <select value={type} onChange={(e) => settype(e.target.value)}>
              <option value={"education"}>education</option>
            </select>
          </div>
          <div>
            <labe>heading</labe>
            <input
              onChange={(e) => setHeading(e.target.value)}
              value={heading}
              placeholder="ex:how become a developer"
            />
          </div>
          <div>
            <labe>Tips</labe>
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
