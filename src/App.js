import React from "react";
import User from './components/User';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  return (
    <div>
      <Login />
      <br />
      <User />
      <br />
      <Logout />
      <br />
    </div>
  );
}

export default App;
