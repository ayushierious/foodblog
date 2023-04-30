import React, { useState } from "react";
import axios from "axios";
import PostContent from "./PostContent";
import UserContext from "./UserContext";
function UserForm() {
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [userId, setUserId] = useState()

  // Add code to handle API request
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      "name": `${username}`,
      "gender": `${gender}`
    }
    const headers = {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      'Content-Type': 'application/json',
    };

    axios
      .post("https://3970-14-97-167-154.ngrok-free.app/createUser", data, { headers })
      .then((response) => {
        console.log(response.data.user_id);
        setUserId(response.data.user_id)
      })
      .catch((error) => {
        console.error(error);
      });
  };



  return (
    <>
      <UserContext.Provider value={userId}>

        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label>
            Gender:
            <select value={gender} onChange={(event) => setGender(event.target.value)}>
              <option value="">-- Select gender --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
        <div>
          Your user ID is : {userId}
        </div>
        <div>
          {userId && <PostContent />}

        </div>
      </UserContext.Provider>

    </>
  );
}

export default UserForm;

