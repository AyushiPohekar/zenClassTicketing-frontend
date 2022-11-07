
import React from "react";
import {MentorQueries} from "./Mentorqueries"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Student.css'
import { API } from "../components/global";



export default function MentorQuerylist() {
    const [mentorlist, setMentorlist] = useState([]);
   
    
 
  
 
   const allmentorqueries = () => {
     let token = localStorage.getItem("usersdatatoken");
     fetch(`${API}/mentor/queries`, { method: "GET",headers: {
         "Content-Type": "application/json",
         "Authorization": token
       }, })
       .then((data) => data.json())
       .then((eqs) => setMentorlist(eqs));
   };
 
   useEffect(() => allmentorqueries(), []);
 
   const navigate = useNavigate();
   return (
     <div >
     
     <div className="Studentqueries-list">
     {mentorlist.map((men)=>(<MentorQueries men={men}  _id={men._id} allmentorqueries={allmentorqueries}/>))} 
 
   
     </div>
     </div>
     
   );
 }

