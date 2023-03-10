import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TrendingTopics from "./components/TrendingComponents/TrendingComponents.js";
import GlobalStyle from "./Constants/GlobalStyle.js";
import TimelinePage from "./pages/timelinePage.js/TimelinePage";
import SignUp from "./pages/signUp.js";
import SignIn from "./pages/signIn.js";
import UserProvider from "./contexts/userContext.js";

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
