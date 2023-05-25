import React, { useState, useEffect } from "react";
// import { loginUrl } from "../script/spotify.js";
import "../styles/login.css";

function Login() {
  const [loginUrl, setLoginUrl] = useState("");

  const spotifyUrl = process.env.REACT_APP_SPOTIFY_API;
  //const spotifyUrl = "http://localhost:5000/spotify";

  useEffect(() => {
    async function fetchLoginUrl() {
      const loginUrlStream = await fetch(spotifyUrl);

      const loginUrlJson = await loginUrlStream.json();
      setLoginUrl(loginUrlJson.loginUrl);
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
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      {/* login button */}
    </div>
  );
}

export default Login;
