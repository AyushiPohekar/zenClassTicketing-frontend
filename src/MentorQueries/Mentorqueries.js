import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./Student.css";
import { API } from "../components/global";

import { useState } from "react";



export function MentorQueries({ men, _id  }) {
 const navigate = useNavigate();
  return (
    <div className="dashcontainer" >
      <div className="dash3">
        <h5 className="querytitle" onClick={() => navigate(`/mentordashboard/${_id}`)}>{men.subject}</h5>
     
          
        
            <p className="querystatus1" >{men.status1}</p>
           
        
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
