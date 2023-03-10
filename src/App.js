import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TrendingTopics from "./Components/TrendingComponents/TrendingComponents";
import GlobalStyle from "./Constants/GlobalStyle";
import TimelinePage from "./Pages/timelinePage.js/TimelinePage";
import SignUp from "./Pages/signIn";
import SignIn from "./Pages/signIn";
import User from "./Pages/User";
import UserProvider from "./contexts/userContext";

function App() {
  const [datas, setDatas] = useState([])

  return (
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<SignIn setDatas={setDatas}/>} />
            <Route path="/sign-up" element={<SignUp />} />
             <Route path="/timeline" element={ <TimelinePage datas={datas}/> }/>

          <Route path="/hashtag" element={<TrendingTopics />} />
            <Route path="/hashtag" element={<TrendingTopics />} />
            <Route path="/timeline/user/:id" element={<User />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
