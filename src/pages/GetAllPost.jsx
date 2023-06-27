import { useGetAllPostQuery } from "../services/Post";
import Loading from "./Loading.jsx";
import Error from "./Error.jsx";

const GetAllPost = () => {
  const { data, isError, isLoading } = useGetAllPostQuery();
  const responseData = useGetAllPostQuery();
  console.log(responseData);
  if (isLoading) return <Loading />;
  if (isError) return <Error error={responseData.error.error} />;
  return (
    <>
      {/* {isLoading ? (
            <Loading />
          ) : (
            <>
              <h1>Hello World</h1>
            </>
          )} */}

      <h1>RTK Query (Get All Data)</h1>
      {data.map((post) => (
        <div key={post.id}>
          <p>{post?.id}</p>
          <h2> Title : {post?.title}</h2>
          <p> Body : {post?.body}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default GetAllPost;
