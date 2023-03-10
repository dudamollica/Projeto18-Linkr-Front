import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./AppContext/auth";
import TrendingTopics from "./Components/TrendingComponents/TrendingComponents";
import GlobalStyle from "./Constants/GlobalStyle";
import TimelinePage from "./TimelinePage.js/TimelinePage";
import SignUp from "./Pages/signUp";
import SignIn from "./Pages/signIn";
import User from "./Pages/User";

function App() {
  return (
    <>


      <AuthProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/hashtag/:hashtag" element={<TrendingTopics />} />
            <Route path="/timeline/user/:id" element={<User />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>


    </>
  );
}

export default App;
