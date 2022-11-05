import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import PasswordReset from "./components/PasswordReset";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import Error from "./components/Error";
import MentorLogin from "./components/MentorLogin";
import MentorDashboard from "./components/MentorDashboard";
import MentorRegister from "./components/MentorRegister";
import MentorPasswordReset from "./components/MentorPasswordReset";
import Home from './components/Home';
import CreateQuery from "./StudentQueries/CreateQuery";
import { Routes, Route, useNavigate } from "react-router-dom"

import MentorForgotPassword from "./components/MentorForgetPassword";
import Querydetails from "./StudentQueries/Querydetails";

function App() {



  // const [data, setData] = useState(false);

  // const { logindata, setLoginData } = useContext(LoginContext);


  // const history = useNavigate();

  // const DashboardValid = async () => {
  //   let token = localStorage.getItem("usersdatatoken");

  //   const res = await fetch(`${API}/validuser`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": token,
        
  //     }
  //   });

  //   const data = await res.json();

  //   if (data.status == 401 || !data) {
  //     // console.log("user not valid");
  //   } else {
  //     console.log("user verify");
  //     setLoginData(data)
  //     history(`/dash`);
  //   }
  // }

  // useEffect(() => {
  //   setTimeout(()=>{
  //     DashboardValid();
  //     setData(true)
  //   },2000)

  // }, [])
  return (
    <>
    
            {/* <Header /> */}

            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/mentorregister" element={<MentorRegister />} />
              <Route path="/dash" element={<Dashboard />} />
              <Route path="/mentordashboard" element={<MentorDashboard/>} />
              <Route path="/mentorlogin" element={<MentorLogin/>} />
              <Route path="*" element={<Error />} />
              <Route path="/password-reset" element={<PasswordReset />} />
              <Route path="/mentorpasswordreset" element={<MentorPasswordReset />} />
              <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />} />
              <Route path="/dash/:_id" element={<Querydetails />} />
              <Route path="/dash/create" element={<CreateQuery />} />
        
            </Routes>
          </>

      
   
  );
}

export default App;



