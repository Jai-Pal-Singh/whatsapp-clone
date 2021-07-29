import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../middleware/firebase";
import { actionTypes } from "../middleware/reducer";
import { useStateValue } from "../middleware/StateProvider";
import "./Login.css";

function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://pluspng.com/img-png/whatsapp-png-wazapp-logo-whats-whatsapp-logo-whatsapp-icon-2050.png" alt="whatsapp logo" />
        <div className="login__text">
          <h2>Sign in to WhatsApp</h2>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
