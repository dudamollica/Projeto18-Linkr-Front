import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthProvider from "./AppContext/auth.js";
import GlobalStyle from "./Constants/GlobalStyle.js";
import TimelinePage from "./TimelinePage.js/TimelinePage.js";

function App() {
  return (
    <>
     <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/timeline" element={ <TimelinePage/> }/>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
