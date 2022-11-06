import { Studentqueries} from "./Studentqueries";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import './Student.css'
import { API } from "../components/global";
import { QueryListContext } from "../components/ContextProvider/QueryContext";
import React from "react";

function StudentQuerylist() {
  const [querylist,setQueryList] = useContext(QueryListContext);


 

  const allStudentqueries = () => {
    let token = localStorage.getItem("usersdatatoken");
    fetch(`${API}/queries`, { method: "GET",headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }, })
      .then((data) => data.json())
      .then((eqs) => setQueryList(eqs));
  };

  useEffect(() => allStudentqueries(), []);

  const navigate = useNavigate();
  return (
    <div >
    
    <div className="Studentqueries-list">
    {querylist.map((stu)=>(<Studentqueries stu={stu}  _id={stu._id}  allStudentqueries ={ allStudentqueries }/>))} 

  
    </div>
    </div>
    
  );
}
export default StudentQuerylist;
