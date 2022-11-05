import React from "react";
import Header from "../components/Header";
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { API } from "../components/global";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../components/ContextProvider/Context";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Student.css";

const CreateQuery = () => {

  const { logindata, setLoginData } = useContext(LoginContext);
  console.log(logindata)
  const [data, setData] = useState(false);


  const QuerydetailsValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch(`${API}/validuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
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
    setTimeout(() => {
      QuerydetailsValid();
      setData(true);
    }, 2000);
  }, []);

  const navigate = useNavigate();
  const queryValidationSchema = yup.object({
    subject: yup.string().required("Select a subject"),
    category: yup.string().required("Select a category"),
    subCategory: yup.number().required("Select a subcategory"),
    description: yup.string().required("Select a description"),
    preferredLanguage: yup.string().required("Select a preferred language"),
    from: yup.string().required("You are available from time?"),
    till: yup.string().required("You are available from till?"),
  });

  const addquery = (newquery) => {
    let token = localStorage.getItem("usersdatatoken");
   
    fetch(`${API}/queries`, {
      method: "POST",
      body: JSON.stringify(newquery),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then(() => navigate("/dash"));
  };
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        subject: "",
        category: "",
        subCategory: "",
        description: "",
        preferredLanguage: "",
        from: "",
        till: "",
      },
      validationSchema: queryValidationSchema,
      onSubmit: (newquery) => {
        console.log("onSubmit", newquery);
        addquery(newquery);
      },
    });

  return (
    <>
      <Header />
      <div className="dash1">
        <button className="backbtn" onClick={() => navigate(-1)}>
      
          Back
        </button>
      </div>
      <form className="QuerydetailsContainer" onSubmit={handleSubmit}>
        <div className="Topic">Topic</div>
        <div className="div1">
          <div className="div2">
            <label className="Category">Category</label>
            <input
              type="text"
              class="form-control"
              id="usr"
              name="category"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.category && errors.category}
              helperText={
                touched.category && errors.category ? errors.category : ""
              }
            ></input>
          </div>
          <div className="div2">
            <label className="Category">Sub-Category</label>
            <input
              type="text"
              class="form-control"
              id="usr"
              name="subCategory"
              value={values.subCategory}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.subCategory && errors.subCategory}
              helperText={
                touched.subCategory && errors.subCategory ? errors.subCategory : ""
              }
            ></input>
            
          </div>
          <div className="div2">
            <label className="Category">
              Prefered Voice Communication Language
            </label>
            <input
              type="text"
              class="form-control"
              id="usr"
              name="subject"
              value={values.preferredLanguage}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.preferredLanguage && errors.preferredLanguage}
              helperText={
                touched.preferredLanguage && errors.preferredLanguage ? errors.preferredLanguage : ""
              }
            ></input>
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
              name="subject"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.subject && errors.subject}
              helperText={
                touched.subject && errors.subject ? errors.subject : ""
              }
            ></input>
          </div>
          <div>
            <label className="Category">Query Description</label>
            <textarea
              class="form-control"
              rows="5"
              id="comment"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.description && errors.description}
              helperText={
                touched.description && errors.description
                  ? errors.description
                  : ""
              }
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
              name="from"
              value={values.from}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.from && errors.from}
              helperText={touched.from && errors.from ? errors.from : ""}
            ></input>
          </div>
          <div>
            <label className="Category">Till:</label>
            <input
              type="text"
              class="form-control"
              id="usr"
              name="till"
              value={values.till}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.till && errors.till}
              helperText={touched.till && errors.till ? errors.till : ""}
            ></input>
          </div>
        </div>

        <div className="btnContainer">
          <div className="btndiv">
            <button className="cancelbtn" onClick={() => navigate("/dash")}>
              Cancel
            </button>
            <button type="submit" className="createbtn" >
              Create
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateQuery;
