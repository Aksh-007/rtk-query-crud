import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>Home</h1>
      <Link to="getallpost" style={{ marginRight: "10px" }}>
        <button>Get All Post</button>
      </Link>
      <Link to="getallpostbyid/20" style={{ marginRight: "10px" }}>
        <button>Get Post by ID</button>
      </Link>
      <Link to="deletepostbyid/20" style={{ marginRight: "10px" }}>
        <button>Delete Post</button>
      </Link>
      <Link to="getpostbylimit/20" style={{ marginRight: "10px" }}>
        <button>Get Post by Limit</button>
      </Link>
      <Link to="createpost" style={{ marginRight: "10px" }}>
        <button>Create Post</button>
      </Link>
    </div>
  );
};

export default Home;
