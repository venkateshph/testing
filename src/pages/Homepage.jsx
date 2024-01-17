import { React, useEffect, useState } from "react";

import supabase from "C:/Users/keert/Desktop/Test/Project/src/security/pass.js";
import {  Skeleton } from "antd";
import Mark from "./Mark";
import Profile from "./Profile";
const Homepage = (props) => {
  const [created, setCreated] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const fecth = async () => {
    const { data: username_data, err } = await supabase
      .from("News")
      .select("*")
      .range(0, 10);
    setIsloading(false);
    setCreated(username_data);
  };

  useEffect(() => {
    fecth();
    supabase
      .channel("custom-filter-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Nes", filter: "News" },
        (payload) => {
          console.log("Change received!", payload);
          fecth();
        }
      )
      .subscribe();
  });
  return (
    <>
      <nav class="navbar text-dark shadow  ">
        <div class="container-fluid">
          <a class="navbar-brand text-dark" href="#">
            <img
              src="../src/assets/v.png"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Welcome Back {window.localStorage.getItem("username")}  
          </a>
         
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Annocments🔉</h1>
            {isloading ? (
              <Skeleton active style={{ width: "18rem" }} />
            ) : (
              <div class="card shadow-lg " style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">News:</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Posted Latest👇</h6>

                  <ul class="list-group list-group-flush">
                    {created.map((data) => (
                      <li class="list-group-item" key={data.id}>
                        {data.News}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="col-6">
            <Mark/>
          </div>
          <div className="col">
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
