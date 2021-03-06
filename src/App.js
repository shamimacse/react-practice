import React, { useEffect, useState } from "react";
import "./App.css";
import User from "./Component/User/User";
import News from "./Component/News/News";
import Fragment from "./Component/Fragment/Fragment";

function App() {
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("https://api.mocki.io/v1/7b47b898")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const addMember = (name) => {
    setTeam([...team, name]);
  };

  return (
    <div>
      
      <div>

        <Fragment></Fragment>
        <h1>Team Builder</h1>
        <ul>
          {team.map((name, idx) => (
            <li key={idx}>{name}</li>
          ))}
        </ul>
        {users.map((user) => (
          <User user={user} addMember={addMember}></User>
        ))}
      </div>
      <div
        style={{
          textAlign: "right",
         flex:'right',
          margin: "5px",
          border: "5px",
          borderLeft:'1px solid lightGray',
          
        }}
      >
        <News></News>
      </div>
    </div>
  );
}

export default App;
