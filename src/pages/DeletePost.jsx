import { useDeletePostMutation } from "../services/Post";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";

const DeletePost = () => {
  const { id } = useParams();
  //   const res = useDeletePostMutation();
  const [deletePost, responseData] = useDeletePostMutation();
  console.log("delete Post", deletePost, "response data", responseData);
  const { isLoading, isSuccess, isError } = responseData;

  if (isLoading) return <Loading />;
  if (isError) return <Error error={responseData?.error?.error} />;
  return (
    <div>
      <h1>RTK Query (Delete Post by ID)</h1>
      {!isSuccess && (
        <>
          <h4>Id : {id}</h4>
          <button
            onClick={() => {
              deletePost(id);
            }}
          >
            Delete Post
          </button>
        </>
      )}

      {isSuccess && <p>Succesfully deleted post with Id : {id}</p>}
    </div>
  );
};

export default DeletePost;
