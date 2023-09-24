import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";

function App() {
  var [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data));
  }, []);

  return (
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
  );
}
export default App;
