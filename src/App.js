import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TrendingTopics from "./components/TrendingComponents/TrendingComponents";
import GlobalStyle from "./Constants/GlobalStyle";
import TimelinePage from "./pages/timelinePage.js/TimelinePage";
import SignUp from "./pages/signIn";
import SignIn from "./pages/signIn";
import User from "./pages/User";
import UserProvider from "./contexts/userContext";

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
              <Route path="/timeline/user/:id" element={<User />} />
            </Routes>
          </UserProvider>
        </BrowserRouter>
  );
}

export default App;
