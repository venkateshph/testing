
import { Routes, Route, Router } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Safe from "./security/pass";
import Profile from "./pages/Profile";
function App() {
  return (
    <>
    
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route element={<Safe></Safe>}>
            <Route path="/homepage" element={<Homepage/>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
          </Route>
        </Routes>
     
    </>
  );
}

export default App;
