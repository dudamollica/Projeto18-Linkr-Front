import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TrendingTopics from "./components/TrendingComponents/TrendingComponents.js";
import GlobalStyle from "./Constants/GlobalStyle.js";
import TimelinePage from "./pages/timelinePage.js/TimelinePage.js"

import SignUp from "./pages/signUp.js";
import SignIn from "./pages/signIn.js";
import UserProvider from "./contexts/userContext.js";
function App() {
  const [datas, setDatas] = useState([])

  return (
        <BrowserRouter>
        <UserProvider>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<SignIn setDatas={setDatas} />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/timeline" element={<TimelinePage datas={datas} />} />
              <Route path="/hashtag/:hashtag" element={<TrendingTopics />} />
            </Routes>
          </UserProvider>
        </BrowserRouter>
  );
}

export default App;
