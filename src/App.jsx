import { Route, Routes } from "react-router-dom";
import "./App.css";
import GetAllPost from "./pages/GetAllPost.jsx";
import Home from "./pages/Home";
import GetPostById from "./pages/GetPostById";
import GetPostByLimits from "./pages/GetPostByLimits";
import DeletePost from "./pages/DeletePost";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="getallpost" element={<GetAllPost />} />
      <Route path="getallpostbyid/:id" element={<GetPostById />} />
      <Route path="deletepostbyid/:id" element={<DeletePost />} />
      <Route path="getpostbylimit/:id" element={<GetPostByLimits />} />
      <Route path="createpost" element={<CreatePost/>}/>
    </Routes>
  );
}

export default App;
