import React, { useContext, useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./ContextProvider/Context";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { API } from "./global";
import StudentNavbar from "../StudentQueries/StudentNavbar";

const Dashboard = () => {
  const { logindata, setLoginData } = useContext(LoginContext);
  const [data, setData] = useState(false);

  const history = useNavigate();
  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch(`${API}/validuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });

    const data = await res.json();
    if (data.status == 401 || !data) {
  
      history("*");
    } else {
      history("/dash");
      setLoginData(data);
   
    }
  };



  useEffect(() => {
    setTimeout(()=>{
      DashboardValid();
      setData(true)
    },2000)

  }, [])

  return (
    <>
        <StudentNavbar/>
            {
                data ? 
                <div>Querypage</div>                
                
                
                : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    Loading... &nbsp;
                    <CircularProgress />
                </Box>
            }

        </>
  );
};

export default Dashboard;
