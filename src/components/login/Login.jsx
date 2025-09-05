import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdministradorContainer from "../administrador/AdministradorContainer";

const Login = ({
  handleLogin,
  loginAllowed,
  isLoading,
  wrongPasswordAlert,
  saveUserName,
  saveUserPass,
  userCredentials,
  isButtonDisabled,
  setIsButtonDisabled,
}) => {
  useEffect(() => {
    if (userCredentials.username != null && userCredentials.password != null) {
      setIsButtonDisabled(false);
    }
  }, [userCredentials]);

  return (
    <>
      {!isLoading && !loginAllowed ? (
        <section className="seccion-login">
          <div className="login-contenido">
            <p>Ingresa tus datos</p>
            <form action="">
              <label htmlFor="username"></label>
              <input
                name="username"
                onChange={(e) => saveUserName(e.target.value)}
                type="text"
                placeholder="Ingresa el usuario"
              />
              <label htmlFor="password"></label>
              <input
                name="password"
                onChange={(e) => saveUserPass(e.target.value)}
                type="password"
                placeholder="Ingresa contraseña"
              />
            </form>
            {wrongPasswordAlert && <p>Usuario o contraseña incorrectos</p>}
            <div>
              <button
                disabled={isButtonDisabled}
                onClick={() => handleLogin(userCredentials)}
              >
                Ingresar
              </button>
              <Link to="/">
                <button>Regresar</button>
              </Link>
            </div>
          </div>
        </section>
      ) : isLoading && !loginAllowed ? (
        <div className="seccion-login">
          <div className="login-contenido">
            <Spinner />
          </div>
        </div>
      ) : !isLoading && loginAllowed ? (
        <AdministradorContainer />
      ) : null}
    </>
  );
};

export default Login;
