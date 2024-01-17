import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Homepage from "./Pages/Homepage";
import News from "./Pages/News";
import Safe from "./security/safe";
import Fotter from "./Pages/Fotter";
import DataUpload from "./Pages/DataUpload";
import Student from "./Pages/Student";
import Teacher from "./Pages/Teacher";
import "./App.css"
const App = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg  shadow-lg" style={{backgroundColor:"#98bdff" , color:"white"}}>
        <div class="container-fluid" style={{backgroundColor:"#98bdff" , color:"white"}}>
          <a class="navbar-brand" href="/homepage" style={{ color:"white"}}>
            Admin
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse"   id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" style={{ color:"white"}} aria-current="page" href="/news">
                  News🗞️
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color:"white"}}
                >
                  Data-Upload📂
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/Student">
                      Student
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li> 
                  <li>
                    <a class="dropdown-item" href="/Teacher">
                      Teachers
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color:"white"}}>
                  Exam📄
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route element={<Safe></Safe>}>
          <Route element={<Homepage />} path="/homepage"></Route>
          <Route element={<News />} path="/news"></Route>
          <Route element={<DataUpload />} path="/dataupload"></Route>
          <Route element={<Student />} path="/Student"></Route>
          <Route element={<Teacher />} path="/Teacher"></Route>
        </Route>
      </Routes>
      <Fotter />
    </>
  );
};

export default App;
