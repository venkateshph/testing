import { Button } from "antd";
import React, { useState, useEffect } from "react";
import supabase from "C:/Users/keert/Desktop/Test/Project/src/security/pass.js";
import { Link } from "react-router-dom";
import "../App.css"
const Login = () => {
  const [loginn, setLogin] = useState(false);
  const [username, setusername] = useState(null);
  const [password, setpassword] = useState(null);
  let v = username;
  
  useEffect(() => {
    setLogin(JSON.parse(window.localStorage.getItem("testing")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("testing", loginn);
  }, [loginn]);

  async function login() {
    const { data, error } = await supabase
      .from("Students")
      .select()
      .eq("Name", username);
    console.log(data);
    if (username == data[0].Name || password == data[0].Rollno) {
      setLogin(true);
      JSON.parse(window.localStorage.getItem("username"));

      window.localStorage.setItem("username", v);
      console.log("veb");
    } else {
      console.log("no");
    }
  }
  return (
    <>
      <div class="postion-relative">
        <div class="position-absolute top-50 start-50 translate-middle">
          <div className="card" style={{ width: "20rem" }}>
            <div className="card-body">
              <h5 class="float-right">Student Login</h5>
              <label for="username">Username:</label>
              <input
                id="username"
                onChange={(e) => setusername(e.currentTarget.value)}
              />
              
              <label for="password">Password:</label>
              <input
                id="password"
                onChange={(e) => setpassword(e.currentTarget.value)}
              />
              <br></br>
              {loginn ? (
                <Link to="/homepage">hi</Link>
              ) : (
                <Button onClick={login}>Login</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
