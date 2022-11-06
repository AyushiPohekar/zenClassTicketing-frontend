import * as React from "react";

import { useNavigate } from "react-router-dom";
import "./Student.css";





export function MentorQueries({ men, _id  }) {
    


    const styles = {
        backgroundColor: men.status1 == "OPEN" ? " #D5FFD3" : "#F5BAA8",
        color: men.status1 == "OPEN" ? "green" : "red",
      };

 const navigate = useNavigate();
  return (
    <div className="dashcontainer" >
      <div className="dash3">
        <h5 className="querytitle" onClick={() => navigate(`/mentordashboard/${_id}`)}>{men.subject}</h5>
     
          
        
            <p style={styles} className="querystatus1" >{men.status1}</p>
           
        
      </div>
      <div className="dash2">
        <span className="querycategory">{men.category}</span>
        <span className="querydate">
          {new Date(men.openAt).toLocaleString()}
        </span>
      </div>

      
    </div>
  );
}
