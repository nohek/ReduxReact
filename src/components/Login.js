import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUser } from "../redux/userSlice";

const Login = () => { 
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(changeUser(name))
  }
  
  return (
    <form>
      <h1>
        Login
      </h1>
      <div>
        <input type='text' placeholder="Nome" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <button onClick={handleLogin} >
          Login
        </button>
      </div>
    </form>
  )
}

export default Login;