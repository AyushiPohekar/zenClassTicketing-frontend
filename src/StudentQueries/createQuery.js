import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";



const queryValidationSchema=yup.object({
 subject: yup.string().required("Why not fill this subject?"),
     category:yup.string().required("Why not fill this category?") ,
     description: yup.string().required("Why not fill this description?"),
     subCategory: yup.string().required("Why not fill this subcategory?"),
     sender:yup.string().required("Why not fill this subcategory?")
})

export function Addmovie() {
  // const [name, setName] = useState("");
  // const [rating, setRating] = useState("");
  // const [poster, setPoster] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();
  const addmovie = (newmovie) => {
    

    // setmovieList([...movieList, newmovie]);

    //POST
    //1.METHOD-POST
    //2.data and JSON
    //3.headers-JSON

    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/movies`, {
      method: "POST",
      body: JSON.stringify(newmovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movies"));

  };
  const {handleSubmit,values,handleChange,handleBlur,touched,errors}=useFormik({
    initialValues:
    {name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",},
    validationSchema:movieValidationSchema,
    onSubmit:(newmovie)=>{
    
      console.log("onSubmit",newmovie);
      addmovie(newmovie);
    },
  });

  return (

    <form onSubmit={handleSubmit} className='add-movie-form'>

      <TextField 
      label="Name" 
      variant="outlined"
      value={values.name} 
      name="name" 
      onChange={handleChange} 
      onBlur={handleBlur}
      error={touched.name && errors.name}
     helperText  ={touched.name && errors.name ?errors.name: ""}/> 

      <TextField label="Poster" variant="outlined" 
      value={values.poster} 
      name="poster" 
      onChange={handleChange} 
      onBlur={handleBlur}
      error={touched.poster && errors.poster}
      helperText= {touched.poster && errors.poster ?errors.poster: ""}/>
     

      <TextField label="Rating" variant="outlined" 
      value={values.rating} 
      name="rating" 
      onChange={handleChange} 
      onBlur={handleBlur} 
      error={touched.rating && errors.rating}
      helperText=  {touched.rating && errors.rating ?errors.rating: ""}/>

    
      <TextField label="Summary" variant="outlined" 
      value={values.summary} 
      name="summary" 
      onChange={handleChange} 
      onBlur={handleBlur} 
      error={touched.summary && errors.summary}
      helperText={touched.summary && errors.summary ?errors.summary: ""}/>

      
<TextField label="trailer" variant="outlined" 
      value={values.trailer} 
      name="trailer" 
      onChange={handleChange} 
      onBlur={handleBlur} 
      error={touched.trailer && errors.trailer}
      helperText={touched.trailer && errors.trailer ?errors.trailer: ""}/>
    
   
      <Button type="submit" variant="outlined">Add Movie</Button>
    </form>

  );
}
