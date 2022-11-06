import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./Student.css";
import { API } from "../components/global";
import { useEffect } from "react";
export function Studentqueries({ stu, _id,setStudentlist }) {



 
 
  const styles = {
    backgroundColor: stu.status1 == "OPEN" ? " #D5FFD3" : "#F5BAA8",
    color: stu.status1 == "OPEN" ? "green" : "red",
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
  console.log("id",_id)
  const updatequery=(_id)=>{fetch(`http://localhost:8009/queries/close-query/${_id}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));};

    useEffect(() => updatequery(), [_id]);

   
  const [status1, setStatus1] = React.useState("OPEN");
  
  const navigate = useNavigate();
  return (
    <div className="dashcontainer" >
      <div className="dash3">
        <h5 className="querytitle" onClick={() => navigate(`/dash/${_id}`)}>{stu.subject}</h5>
        {status1==="OPEN" ? (
          
          <p className="querystatus1" style={styles}>
            <a  onClick={() => updatequery(_id)}>Close</a> <span>{stu.status1}</span>
          </p>
        ) : (
          <p className="querystatus1" style={styles}>
            {stu.status1}
          </p>
        )}
      </div>
      <div className="dash2">
        <span className="querycategory">{stu.category}</span>
        <span className="querydate">
          {new Date(stu.openAt).toLocaleString()}
        </span>
      </div>
    </div>
  );
}
