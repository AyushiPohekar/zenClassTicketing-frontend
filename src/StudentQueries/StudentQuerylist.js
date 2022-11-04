import { Studentqueries} from "./Studentqueries";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Student.css'
import { API } from "../components/global";

import React from "react";

function StudentQuerylist() {
  const [studentlist, setStudentlist] = useState([]);
  console.log(studentlist)

 

  const allStudentqueries = () => {
    let token = localStorage.getItem("usersdatatoken");
    fetch(`${API}/queries`, { method: "GET",headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }, })
      .then((data) => data.json())
      .then((eqs) => setStudentlist(eqs));
  };

  useEffect(() => allStudentqueries(), []);

  const navigate = useNavigate();
  return (
    <div >
    
    <div className="Studentqueries-list">
    {studentlist.map((stu)=>(<Studentqueries stu={stu} />))} 

  
    </div>
    </div>
    
  );
}
export default StudentQuerylist;
