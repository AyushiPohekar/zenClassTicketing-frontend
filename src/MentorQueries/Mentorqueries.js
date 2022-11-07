import * as React from "react";
import { API } from "../components/global";
import { useNavigate } from "react-router-dom";
import "./Student.css";
import { useEffect } from "react";
export function MentorQueries({ men, _id,allmentorqueries}) {
  const styles = {
    backgroundColor: men.status1 == "OPEN" ? " #D5FFD3" : "#F5BAA8",
    color: men.status1 == "OPEN" ? "green" : "red",
  };

  let token = localStorage.getItem("usersdatatoken");
  var myHeaders = new Headers();
  myHeaders.append("Authorization",token);
  var raw = "";
   var requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  const updatementorquery=(_id)=>{fetch(`${API}/mentor/queries/close-query/${_id}`, requestOptions)
    .then(response => response.text())
    .then(()=> allmentorqueries ())
    .catch(error => console.log('error', error));};

    useEffect(() => updatementorquery(), [_id]);

   

  
  








  const navigate = useNavigate();
  return (
    <div className="dashcontainer">
      <div className="dash3">
        <h5 className="querytitle">
          {men.subject}
        </h5>
        {men.status1==="OPEN" ? (
          
          <p className="stsp" >
            <p  onClick={() => updatementorquery(_id)} className="queryclose">Close</p> 
            <p className="querystatus1" style={styles}>{men.status1}</p>
           
          </p>
        ) : (
          <p className="querystatus1" style={styles}>
            {men.status1}
          </p>
        )}
      </div>

      <div className="dash2">
        <p className="querycategory">{men.category}</p>
        <div className="stuinfo">

        <span className="tag">Query CreatedAt:</span>
        <span className="querydate">{new Date(men.openAt).toLocaleString()}</span>


        </div>
       
      </div>

      <div className="dash2">
        <p className="mentorquerystatus">{men.status2}</p>
        
        </div>
        <hr></hr>

        <div className="dash2">
        <div className="stuinfo">
        <span className="tag">Studentname:</span>
          <span className="raisedBy">{men.rasiedBy.fname}</span>
       
       
        </div>
      
      </div>
      <div className="dash2">
        <div className="stuinfo">
          <span className="tag">StudentId:</span>
         <span>{men.clientId}</span> 
        </div>
        <div className="stuinfo">
          <span className="tag">StudentEmail:</span>
          <span>{men.rasiedBy.email}</span>
        </div>
      </div>
    </div>
  );
}
