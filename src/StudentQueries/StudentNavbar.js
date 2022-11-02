import React from 'react';
import Avatar from "@mui/material/Avatar";
import './Student.css';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useContext } from "react";
import { LoginContext } from '../components/ContextProvider/Context';
import { API } from '../components/global';

import { useNavigate } from "react-router-dom";


const StudentNavbar = () => {
    const { logindata, setLoginData } = useContext(LoginContext);
    console.log(logindata.ValidUserOne.fname)
    const history = useNavigate();
  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const logoutuser = async () => {
      let token = localStorage.getItem("usersdatatoken");
    
      const res = await fetch(`${API}/logout`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "Authorization": token,
              Accept: "application/json"
          },
     
      });
  
      const data = await res.json();
      console.log(data);
  
      if (data.status == 201) {
          console.log("user logout");
          localStorage.removeItem("usersdatatoken");
          setLoginData(false)
          history("/");
      } else {
          console.log("error");
      }
  }
  
    const goError = () => {
      history("*");
    };
    const goDash = () => {
      history("/dash");
    };
  



  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
        MyQueries
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
           CreateQueries
            </a>
          </li>
        
        </ul>
        
        <div className="navbar-text">{logindata.ValidUserOne.fname}</div>
        <div className="navbar-text avatar"><Avatar  onClick={handleClick}/></div>

        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            
                <MenuItem
                  onClick={() => {
                    goDash();
                    handleClose();
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    logoutuser();
                    handleClose();
                  }}
                >
                  Logout
                </MenuItem>
           
            
            
          </Menu>
        
      </div>
    </div>
  </nav>

  <div className='container-fluid StudentNavbtm'>
   create
  </div>
  </>


  )
}

export default StudentNavbar