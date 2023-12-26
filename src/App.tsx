import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/SignUp";
import { HOME, LOGIN, REGISTER } from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={REGISTER} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
