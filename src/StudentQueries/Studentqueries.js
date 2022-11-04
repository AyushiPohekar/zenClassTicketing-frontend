import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import './Student.css'

export function Studentqueries({stu}) {
    const styles = {
        backgroundColor: stu.status1== "OPEN" ? " #D5FFD3":"#F5BAA8",
        color:stu.status1== "OPEN" ? "green":"red",
       
      };
  const navigate = useNavigate();
  return (
    <div className='dashcontainer'>
    <div className="dash3">
        <h5 className="querytitle">{stu.subject}</h5>
        <p className="querystatus1" style={styles}>{stu.status1}</p>
        </div>
        <div className="dash2">
        <span className="querycategory">{stu.category}</span>
            <span className="querydate">{new Date(stu.openAt).toLocaleString()}</span>
          
        </div>
        
   
    
    </div>
  );
}
