import { useGetPostByIdQuery } from "../services/Post";
import Loading from "./Loading";
import Error from "./Error";
import { useParams } from "react-router-dom";

const GetPostById = () => {
  let { id } = useParams();
  const { data, isLoading, isError } = useGetPostByIdQuery(id);
  const responseData = useGetPostByIdQuery(id);
  console.log("Response data:", responseData);
  if (isLoading) return <Loading />;
  if (isError) return <Error error={responseData.error.error} />;
  return (
    <div>
      <h1>RTK Query (Get All Data)</h1>
      <div>
        <h1>{data?.id}</h1>
        <h2> Title : {data?.title}</h2>
        <p> Body : {data?.body}</p>
        <hr />
      </div>
    </div>
  );
};

export default GetPostById;
