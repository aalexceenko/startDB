import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import useAuth from "../hook/useAuth";


const LoginPage = () => {

  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  if (!login) {
    return (
      <div className="jumbotron">
        <h3>login page</h3>
        <button className="btn btn-primary" onClick={() => {
          console.log(333);

          setLogin(true);
          navigate("/secret");
          console.log(1333);

        }}>Login</button>
      </div>
    )
  } else {
    return (
      <div className="jumbotron">you have logged in</div>
    )
  }

 
}

export default LoginPage;