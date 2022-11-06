import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./Student.css";
import { API } from "../components/global";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { QueryListContext } from "../components/ContextProvider/QueryContext";
export function Studentqueries({ stu, _id, allStudentqueries  }) {

  // const [queryList, setqueryList] = useState([]);
  const [querylist,setQueryList] = useContext(QueryListContext);
  const getquery = () => {
    fetch(`${API}/queries`, { method: "GET" ,headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },})
      .then((data) => data.json())
      .then((eqs) => setQueryList(eqs));
  };

  useEffect(() => getquery(), []);


 
 
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
 
  const updatequery=(_id)=>{fetch(`${API}/queries/close-query/${_id}`, requestOptions)
    .then(response => response.text())
    .then(()=> allStudentqueries ())
    .catch(error => console.log('error', error));};

    useEffect(() => updatequery(), [_id]);

   

  
  const navigate = useNavigate();
  return (
    <div className="dashcontainer" >
      <div className="dash3">
        <h5 className="querytitle" onClick={() => navigate(`/dash/${_id}`)}>{stu.subject}</h5>
        {stu.status1==="OPEN" ? (
          
          <p className="stsp" >
            <p  onClick={() => updatequery(_id)} className="queryclose">Close</p> 
            <p className="querystatus1" style={styles}>{stu.status1}</p>
           
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
