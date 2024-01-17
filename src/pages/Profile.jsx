import React, { useState } from "react";
import supabase from "C:/Users/keert/Desktop/Test/Project/src/security/pass.js";

const Profile = () => {
  const [Name, setName] = useState(null);
  const [Department, setDepartment] = useState(null);
  const [Rollno, setRollno] = useState(null);
  const [Address, setAddress] = useState(null);
  const [Phonenumber, setPhonenumber] = useState(null);
  const [Bloodgroup, setBloodgroup] = useState(null);
  const [Fathername, setFathername] = useState(null);
  const [Mothername, setMothername] = useState(null);
  const [Email, setEmail] = useState(null);

  async function fetching() {
    const { data, error } = await supabase
      .from("Students")
      .select()
      .eq("Name", window.localStorage.getItem("username"));

    setName(data[0].Name);
    setAddress(data[0].Address);
    setBloodgroup(data[0].Bloodgroup);
    setDepartment(data[0].Department);
    setEmail(data[0].Email);
    setFathername(data[0].Fathername);
    setMothername(data[0].Mothername);
    setPhonenumber(data[0].Phonenumber);
    setRollno(data[0].Rollno);
  }

  fetching();

  return (
    <>
      <h1>Profile</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              class="float-center shadow-lg card text-center "
              style={{ width: "18rem" , backgroundColor: "whitesmoke", color: "black" , padding: "20px", }}
              
            >
              <div class="card-header">About you</div>
              <div class="card-body" style={{backgroundColor:"whitesmoke  "}}>
                <ul class="list-group list-group-flush" >
                  <li  style={{listStyle: "none" , backgroundColor:"whitesmoke"}}>Name: {Name}</li>
                  <li  style={{ listStyle: "none" , backgroundColor:"whitesmoke"}}>Bloodgroup: {Bloodgroup}</li>
                  <li  style={{ listStyle: "none" , backgroundColor:"whitesmoke"}}>Address: {Address}</li>
                  <li  style={{ listStyle: "none" , backgroundColor:"whitesmoke"}}>Phonenumber: {Phonenumber}</li>
                  <li  style={{ listStyle: "none" , backgroundColor:"whitesmoke"}}>Fathername: {Fathername}</li>
                  <li  style={{ listStyle: "none" , backgroundColor:"whitesmoke"}}>Mothername: {Mothername}</li>
                  <li  style={{ listStyle: "none", backgroundColor:"whitesmoke"}}>Department: {Department}</li>
                  <li  style={{ listStyle: "none", backgroundColor:"whitesmoke"}}>Email: {Email}</li>
                  <li  style={{ listStyle: "none", backgroundColor:"whitesmoke"}}>Rollno: {Rollno}</li>
                </ul>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
