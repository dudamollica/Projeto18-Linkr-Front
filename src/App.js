import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import TrendingTopics from "./Components/TrendingComponents/TrendingComponents.js";
import GlobalStyle from "./Constants/GlobalStyle";
import TimelinePage from "./pages/timelinePage.js/TimelinePage.js";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import User from "./pages/User";
import axios from "axios";
import UserContext from "./contexts/userContext";

function App() {
  const [token, setToken] = useState(localStorage.getItem("authToken"));
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [datas, setDatas] = useState([]);

  useEffect(()=>{
    if(window.location.pathname !== "/" && window.location.pathname !== "/signup"){
        getUserData();
    }
},[])

async function getUserData(){
    if(token){
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        try{
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/data`,config);
            setPhoto(result.data.photo);
            setName(result.data.username);
        }catch(e){
            localStorage.setItem("authToken", "");
            window.location.reload();
        }
    }
}
const userContext = {
    token,
    setToken,
    photo,
    setPhoto,
    name,
    setName,
    userId,
    setUserId,
};


  return (
    <BrowserRouter>
        <GlobalStyle />
        <UserContext.Provider value={userContext}>
        <Routes>
          <Route path="/" element={<SignIn setDatas={setDatas} />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/timeline" element={<TimelinePage datas={datas} />} />
          <Route path="/hashtag/:hashtag" element={<TrendingTopics />} />
          <Route path="/timeline/user/:id" element={<User />} />
        </Routes>
        </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;