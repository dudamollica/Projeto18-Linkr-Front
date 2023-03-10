import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TrendingTopics from "./components/TrendingComponents/TrendingComponents.js";
import GlobalStyle from "./Constants/GlobalStyle";
import TimelinePage from "./pages/timelinePage.js/TimelinePage.js";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import User from "./pages/User";
import AuthProvider from "./contexts/userContext";
import { HashtagContext } from "./AppContext/hashtagContext.js";

function App() {
  const [datas, setDatas] = useState([]);
  const [hashtag, setHashtag] = useState(undefined)

  return (
    <>
      <HashtagContext.Provider value={{ hashtag, setHashtag }}>
        <AuthProvider>
          <BrowserRouter>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<SignIn setDatas={setDatas} />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/timeline" element={<TimelinePage datas={datas} />} />
              <Route path="/hashtag/:hashtag" element={<TrendingTopics />} />
              <Route path="/timeline/user/:id" element={<User />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </HashtagContext.Provider>
    </>
  );
}

export default App;