import React from "react";
import App from "./App";
import PropTypes from "prop-types";
import { useState } from "react";
import { USERS_DATA } from "./UserData";

export default function AppContainer() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleClick = (newUserId) => {
    setSelectedUserId(newUserId);
  };

  const selectedUserObj = USERS_DATA.find(
    (element) => element.id === selectedUserId
  );

  return (
    <App
      selectedUserId={selectedUserId}
      handleClick={handleClick}
      selectedUserObj={selectedUserObj}
    />
  );
}

AppContainer.propTypes = {
  selectedUserId: PropTypes.number,
  handleClick: PropTypes.func
};
