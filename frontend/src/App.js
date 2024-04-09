import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {Home} from "./pages/Home/Home"
import {Register} from "./pages/Register/Register"
import {Login} from "./pages/Login/Login"
import {Header} from "./components/Header/Header"
import {NotFound} from "./pages/NotFound/NotFound"
import "./styles/partials/global.scss"

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Navigate to='/' />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/404" />} />
              <Route path="/404" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
