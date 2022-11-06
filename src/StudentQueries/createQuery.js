import React from "react";
import Header from "../components/Header";
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { API } from "../components/global";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../components/ContextProvider/Context";
import "./Student.css";
import { QueryListContext } from "../components/ContextProvider/QueryContext";

const CreateQuery = () => {

  // const { logindata, setLoginData } = useContext(LoginContext);
  // console.log(logindata);
  // const [data, setData] = useState(false);

  // const QuerydetailsValid = async () => {
  //   let token = localStorage.getItem("usersdatatoken");

  //   const res = await fetch(`${API}/validuser`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: token,
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
  //   setTimeout(() => {
  //     QuerydetailsValid();
  //     setData(true);
  //   }, 2000);
  // }, []);
  const [querylist,setQueryList] = useContext(QueryListContext);
  const [subject, setsubject] = useState("");
  const [category, setcategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [description, setdescription] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("");
  const [from, setfrom] = useState("");
  const [till, setTill] = useState("");


  const navigate = useNavigate();

  const addquery = () => {
    const newquery = {
      subject: subject,
      category: category,
      subCategory: subCategory,
      description: description,
      preferredLanguage: preferredLanguage,
      from: from,
      till: till,
    };
  
    // console.log("newquery",newquery)
    setQueryList([...querylist, newquery]);
  
    // console.log("Studenlist",querylist)

  let token = localStorage.getItem("usersdatatoken");
  
  fetch(`${API}/queries`, {
    method: "POST",
    body: JSON.stringify(newquery),
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  }).then(() => navigate("/dash"));




}

   
  return (
    <>
      <Header />
      <div className="dash1">
        <button className="backbtn" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <form className="QuerydetailsContainer" method="POST">
        <div className="Topic">Topic</div>
        <div className="div1">
          <div className="div2">
            <label className="Category">Category</label>
            <div class="input-group ">
              <select
                class="form-select inpgrp"
                onChange={(event) => setcategory(event.target.value)}
                name="category"
              >
                <option selected>---Select category---</option>
                <option>Zen Class Doubt</option>
                <option>Placement Related</option>
                <option>Coordination Related</option>
                <option>PreBootcamp Related</option>
              </select>
            </div>
          </div>
          <div className="div2">
            <label className="Category">Sub-Category</label>
            <div class="input-group ">
              <select
                class="form-select inpgrp"
                onChange={(event) => setSubCategory(event.target.value)}
                name="subCategory"
              >
                <option selected>---Select subcategory---</option>
                <option>Task</option>
                <option>WebCode</option>
                <option>ClassTopic</option>
                <option>Webkata</option>
                <option>Codekata</option>
                <option>Assignment</option>
              </select>
            </div>
          </div>
          <div className="div2">
            <label className="Category">
              Prefered Voice Communication Language
            </label>
            <div class="input-group ">
              <select
                class="form-select inpgrp"
                onChange={(event) => setPreferredLanguage(event.target.value)}
                name=" preferredLanguage"
              >
                <option selected>---Select language---</option>
                <option>Hindi</option>
                <option>English</option>
                <option>Tamil</option>
              </select>
            </div>
          </div>
        </div>
        <div className="Topic">Details</div>
        <div className="div1">
          <div>
            <label className="Category">Query Title</label>

            <input
              type="text"
              class="form-control"
              id="usr"
              onChange={(event) => setsubject(event.target.value)}
              name="subject"
            ></input>
          </div>
          <div>
            <label className="Category">Query Description</label>
            <textarea
              class="form-control"
              rows="5"
              id="comment"
              onChange={(event) => setdescription(event.target.value)}
              name="description"
            ></textarea>
          </div>
        </div>
        <div className="Topic">
          Your available Time ? ( Ours : 9:00 AM - 7:00 PM )
        </div>
        <div className="div1">
          <div>
            <label className="Category">From:</label>
            <input
              type="text"
              class="form-control"
              id="usr"
              onChange={(event) => setfrom(event.target.value)}
              name="from"
            ></input>
          </div>
          <div>
            <label className="Category">Till:</label>
            <input
              type="text"
              class="form-control"
              id="usr"
              onChange={(event) => setTill(event.target.value)}
              name="till"
            ></input>
          </div>
        </div>

        <div className="btnContainer">
          <div className="btndiv">
            <button className="cancelbtn" onClick={() => navigate("/dash")}>
              Cancel
            </button>
            <button type="button" onClick={addquery} className="createbtn">
              Create
            </button>
            {/* <a type="submit" className="btn btn-primary" onClick={addquery}>create</a> */}
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateQuery;
