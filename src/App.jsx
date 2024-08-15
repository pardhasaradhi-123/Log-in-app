import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Sign from "./Sign";
import Login from "./Login";
function App() {
  return (
    <div className="font-sans">
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
