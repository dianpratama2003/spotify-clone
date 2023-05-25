import React, { useState, useEffect } from "react";

import "../styles/login.css";

function Login() {
  const [loginUrl, setLoginUrl] = useState("");
  const [errorSpotify, setErrorSpotify] = useState("");

  const spotifyUrl = process.env.REACT_APP_SPOTIFY_API;

  useEffect(() => {
    async function fetchLoginUrl() {
      try {
        const loginUrlStream = await fetch(spotifyUrl);
        console.error("loginstream: ", loginUrlStream);
        const loginUrlJson = await loginUrlStream.json();
        setLoginUrl(loginUrlJson.loginUrl);
      } catch (error) {
        setErrorSpotify("something wrong");
      }
    }
    fetchLoginUrl();
  }, [spotifyUrl]);

  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo"
      />
      <h1>CLONE</h1>
      {errorSpotify === "" ? (
        <a href={loginUrl}>LOGIN TO SPOTIFY</a>
      ) : (
        <h3>something wrong, cannot connect to back-end</h3>
      )}
    </div>
  );
}

export default Login;
