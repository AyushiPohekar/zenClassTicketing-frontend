import React from "react";
import Header from "../components/Header";
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { API } from "../components/global";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../components/ContextProvider/Context";

const Querydetails = () => {
    const { logindata, setLoginData } = useContext(LoginContext);
  const [data, setData] = useState(false);

  const navigate = useNavigate();
  const QuerydetailsValid = async () => {
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
  
      navigate("*");
    } else {
   
      setLoginData(data);
   
    }
  };



  useEffect(() => {
    setTimeout(()=>{
        QuerydetailsValid ();
      setData(true)
    },2000)

  }, [])

    let token = localStorage.getItem("usersdatatoken");
  const { _id } = useParams();
  const [query, setQuery] = useState({});

  useEffect(() => {
    fetch(`${API}/queries/${_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    
    })
      .then((data) => data.json())
      .then((eq) => setQuery(eq));
  }, [_id]);

  return (
    <>
      <Header />
      <div className="dash1">
        <button className="backbtn"  onClick={() => navigate(-1)}> Back</button>
      </div>
      <div className="QuerydetailsContainer">
       
        <div>
          <h5>{query.subject}</h5>
        </div>
        <hr />
        <div className="Querydetailsrow2">
          <p>
            <span className="Querydetailsspan1">CreatedAt:</span>
            <br />
            <span className="Querydetailsspan2">{query.openAt}</span>
          </p>
          <p>
            <span className="Querydetailsspan1">Assigned:</span>
            <br />
            <span className="Querydetailsspan2">{query.status2}</span>
          </p>
        </div>
        <div className="Querydetailsrow3">
          <p>
            <span className="Querydetailsspan1">Description:</span>
            <br />
            <span className="Querydetailsspan2">{query.description}</span>
          </p>
        </div>

        <div className="Querydetailsrow2">
          <p>
            <span className="Querydetailsspan1">Category:</span>
            <br />
            <span className="Querydetailsspan2">{query.category}</span>
          </p>
          <p>
            <span className="Querydetailsspan1">SubCategory:</span>

            <br />
            <span className="Querydetailsspan2">{query.subCategory}</span>
          </p>
        </div>
        <div className="Querydetailsrow3">
          <p>
            <span className="Querydetailsspan1">Preferred Language</span>
            <br />
            <span className="Querydetailsspan2">{query.preferredLanguage}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Querydetails;
