import React from "react";
import MentorHeader from "../components/MentorHeader";
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { API } from "../components/global";
import { useNavigate } from "react-router-dom";
import { MentorLoginContext } from "../components/ContextProvider/mentorContext";

const MentorQuerydetails = () => {
    const { logindata, setLoginData } = useContext(MentorLoginContext);

  const [data, setData] = useState(false);

  const navigate = useNavigate();
  // const MentorQuerydetailsValid = async () => {
  //   let token = localStorage.getItem("usersdatatoken");

  //   const res = await fetch(`${API}/validmentor`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": token
  //     },
  //   });

  //   const data = await res.json();
  //   if (data.status == 401 || !data) {
  
  //     navigate("*");
  //   } else {
   
  //     setLoginData(data);
   
  //   }
  // };



  // useEffect(() => {
  //   setTimeout(()=>{
  //       MentorQuerydetailsValid ();
  //     setData(true)
  //   },2000)

  // }, [])

    let token = localStorage.getItem("usersdatatoken");
  const { _id } = useParams();
const [mentorquery, setmentorQuery] = useState({});
   console.log(mentorquery)
  useEffect(() => {
    fetch(`${API}/mentor/queries/${_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
    
    })
      .then((data) => data.json())
      .then((eq) => setmentorQuery(eq));
  }, [_id]);

  return (
    <>
      {/* <MentorHeader /> */}
    
      <>
        <div className="dash1">
        <button className="backbtn"  onClick={() => navigate(-1)}> Back</button>
      </div>
      <div className="QuerydetailsContainer">
       
        <div>
          <h5>{mentorquery.subject}</h5>
        </div>
        <hr />
        <div className="Querydetailsrow2">
          <p>
            <span className="Querydetailsspan1">CreatedAt:</span>
            <br />
            <span className="Querydetailsspan2">{mentorquery.openAt}</span>
          </p>
          <p>
            <span className="Querydetailsspan1">Assigned:</span>
            <br />
            <span className="Querydetailsspan2">{mentorquery.status2}</span>
          </p>
        </div>
        <div className="Querydetailsrow3">
          <p>
            <span className="Querydetailsspan1">Description:</span>
            <br />
            <span className="Querydetailsspan2">{mentorquery.description}</span>
          </p>
        </div>

        <div className="Querydetailsrow2">
          <p>
            <span className="Querydetailsspan1">Category:</span>
            <br />
            <span className="Querydetailsspan2">{mentorquery.category}</span>
          </p>
          <p>
            <span className="Querydetailsspan1">SubCategory:</span>

            <br />
            <span className="Querydetailsspan2">{mentorquery.subCategory}</span>
          </p>
        </div>
        <div className="Querydetailsrow3">
          <p>
            <span className="Querydetailsspan1">Preferred Language</span>
            <br />
            <span className="Querydetailsspan2">{mentorquery.preferredLanguage}</span>
          </p>
        </div>

        <div className="Querydetailsrow2">
          <p>
            <span className="Querydetailsspan1">RaisedBy:</span>
            <br />
            <span className="Querydetailsspan2">{mentorquery}</span>
          </p>
          <p>
            <span className="Querydetailsspan1">SubCategory:</span>

            <br />
            <span className="Querydetailsspan2">{mentorquery.subCategory}</span>
          </p>
        </div>



        
      </div>

</>





   
      
    </>
  );
};

export default MentorQuerydetails;
