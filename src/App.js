import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./AppContext/auth.js";
import TrendingTopics from "./components/TrendingComponents/TrendingComponents.js";
import GlobalStyle from "./Constants/GlobalStyle.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/hashtag" element={<TrendingTopics />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
