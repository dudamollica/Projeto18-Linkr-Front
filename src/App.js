import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthProvider from "./AppContext/auth.js";
import GlobalStyle from "./Constants/GlobalStyle.js";
import Search from "./Pages/Search"

function App() {
  return (
    <>
     <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
        <Route element={<Search />} path="/" />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
