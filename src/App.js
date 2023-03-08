import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./AppContext/auth.js";
import TrendingTopics from "./components/TrendingComponents/TrendingComponents.js";
import GlobalStyle from "./Constants/GlobalStyle.js";

import SignUp from "./pages/signUp.js";
import SignIn from "./pages/signIn.js";

function App() {
  return (
    <>

      <AuthProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/hashtag" element={<TrendingTopics />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </>
  );
}

export default App;
