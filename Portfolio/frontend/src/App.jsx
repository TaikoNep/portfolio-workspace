import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";

import { useEffect, useState } from "react";

function App() {
  

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/projects" element={<Projects />} />
  //     </Routes>
  //   </BrowserRouter>
  // );

  const [message, setMessage] = useState("");  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Vite + Express Full Stack App</h1>
      <p>{message}</p>
    </div>
  );

}

export default App
