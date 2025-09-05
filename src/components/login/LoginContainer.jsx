import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const LoginContainer = () => {
  const [realCredentials] = useState({
    username: "ADMIN",
    password: 1234,
  });
  const [loginAllowed, setLoginAllowed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [wrongPasswordAlert, setWrongPasswordAlert] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [userCredentials, setUserCredentials] = useState({
    username: null,
    password: null,
  });

  const navigate = useNavigate();

  const handleLogin = (userCredentials) => {
    setIsLoading(true);
    if (
      userCredentials.username === realCredentials.username &&
      userCredentials.password === realCredentials.password
    ) {
      setWrongPasswordAlert(false);
      setTimeout(() => {
        setIsLoading(false);
        setLoginAllowed(true);
        navigate("/administrador");
      }, 1000);
    } else {
      setIsLoading(false);
      setLoginAllowed(false);
      setWrongPasswordAlert(true);
    }
  };
  const saveUserName = (user) => {
    setUserCredentials((prev) => ({ ...prev, username: user }));
  };
  const saveUserPass = (pass) => {
    const claveANumero = parseInt(pass);
    setUserCredentials((prev) => ({ ...prev, password: claveANumero }));
  };

  return (
    <Login
      isLoading={isLoading}
      loginAllowed={loginAllowed}
      handleLogin={handleLogin}
      wrongPasswordAlert={wrongPasswordAlert}
      saveUserName={saveUserName}
      saveUserPass={saveUserPass}
      userCredentials={userCredentials}
      isButtonDisabled={isButtonDisabled}
      setIsButtonDisabled={setIsButtonDisabled}
    />
  );
};

export default LoginContainer;
