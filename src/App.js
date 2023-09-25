import "./Styles/General.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import NotFound from "./Component/NotFound";
import Home from "./Component/Home";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
