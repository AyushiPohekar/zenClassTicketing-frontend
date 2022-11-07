import React, { useContext, useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { MentorLoginContext } from "./ContextProvider/mentorContext";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { API } from "./global";
import MentorHeader from "./MentorHeader";
import MentorQuerylist from "../MentorQueries/MentorQueryList";

const MentorDashboard = () => {
  const { logindata, setLoginData } = useContext(MentorLoginContext);
  const [data, setData] = useState(false);

  const navigate = useNavigate();
  const MentorDashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch(`${API}/validmentor`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });

    const data = await res.json();
    if (data.status == 401 || !data) {
  
      navigate("*");
    } else {
      navigate("/mentordashboard");
      setLoginData(data);
   
    }
  };



  useEffect(() => {
    setTimeout(()=>{
      MentorDashboardValid();
      setData(true)
    },2000)

  }, [])

  return (
    <>
        <MentorHeader/>
            {
                data ? 
                <>
                <div className="dash1">
                  All Unassigned Student Queries are listed Below!
                </div> 

                <MentorQuerylist/>

                </>               
                
                
                : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    Loading... &nbsp;
                    <CircularProgress />
                </Box>
            }

        </>
  );
};

export default MentorDashboard;
