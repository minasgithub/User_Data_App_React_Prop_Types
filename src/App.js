import "./styles.css";
import { USERS_DATA } from "./UserData";

export default function App(props) {
  const selectedUserObj = props.selectedUserObj;
  const handleClick = props.handleClick;

  return (
    <div className="App">
      <div className="list">
        <ul>
          {USERS_DATA.map((user) => (
            <li onClick={() => handleClick(user.id)} key={user.id}>
              {user.user_name}
            </li>
          ))}
        </ul>
      </div>
      <div className="panel">
        <p>
          {selectedUserObj
            ? `${selectedUserObj.first_name} ${selectedUserObj.last_name} - ${selectedUserObj.occupation}`
            : "Select a user"}
        </p>
        <p>{selectedUserObj ? `${selectedUserObj.catch_phrase}` : ""}</p>
      </div>
    </div>
  );
}
