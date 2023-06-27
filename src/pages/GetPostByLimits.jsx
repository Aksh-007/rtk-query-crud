import { useGetPostByLimitQuery } from "../services/Post";
import Error from "./Error";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

const GetPostByLimits = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useGetPostByLimitQuery(id);
  const responseData = useGetPostByLimitQuery(id);
  console.log(data);

  console.log("Response data", responseData);

  if (isLoading) return <Loading />;
  if (isError) return <Error error={responseData?.error?.error} />;
  return (
    <div>
      <h1>RTK Query (Get All Data by limit)</h1>
      <h1>Current data : {data.length}</h1>
      {data.map((post) => (
        <div key={post.id}>
          <p>{post?.id}</p>
          <h2> Title : {post?.title}</h2>
          <p> Body : {post?.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default GetPostByLimits;
