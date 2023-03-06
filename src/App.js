import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthProvider from "./AppContext/auth.js";
import GlobalStyle from "./Constants/GlobalStyle.js";

function App() {
  return (
    <>
     <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
     
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
