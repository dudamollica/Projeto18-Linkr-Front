import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./AppContext/auth.js";
import GlobalStyle from "./Constants/GlobalStyle.js";
import TimelinePage from "./TimelinePage.js/TimelinePage.js";
import HashtagPage from "./TimelinePage.js/HashtagPage/HashtagPage.js";
import { useState } from "react";
import SignUp from "./pages/signUp.js";
import SignIn from "./pages/signIn.js";
import { HashtagContext } from "./AppContext/hashtagContext.js";

function App() {
  const [hashtag, setHashtag] = useState(undefined)

  return (
    <>
      <HashtagContext.Provider value={{ hashtag, setHashtag }}>
        <AuthProvider>
          <BrowserRouter>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </HashtagContext.Provider>
    </>
  );
}

export default App;
