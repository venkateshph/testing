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
      .from("Teacher  ")
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
              style={{ width: "18rem" }}
            >
              <div class="card-header">About you</div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Name: {Name}</li>
                  <li class="list-group-item">Bloodgroup: {Bloodgroup}</li>
                  <li class="list-group-item">Address: {Address}</li>
                  <li class="list-group-item">Phonenumber: {Phonenumber}</li>
                  <li class="list-group-item">Fathername: {Fathername}</li>
                  <li class="list-group-item">Mothername: {Mothername}</li>
                  <li class="list-group-item">Department: {Department}</li>
                  <li class="list-group-item">Email: {Email}</li>
                  <li class="list-group-item">Rollno: {Rollno}</li>
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
