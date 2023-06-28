import { useState } from "react";
import { useCreatePostMutation } from "../services/Post";
import Error from "./Error";
import Loading from "./Loading";

const CreatePost = () => {
  const [createPost, responseData] = useCreatePostMutation();

  console.log("responseData", responseData);
  const [inputField, setInputField] = useState({
    title: "",
    body: "",
    userId: "",
  });

  const onChangeFormhandler = (e) => {
    const { name, value } = e.target;
    setInputField((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmithandler = (e) => {
    e.preventDefault();
    console.log(inputField);
    createPost(inputField);
  };

  //   if (isLoading) return <Loading />;
  //   if (isError) return <Error error={responseData?.error?.error} />;

  return (
    <>
      {/* {isSucess && <p>Data Created Succesfully</p>} */}
      <form onSubmit={onSubmithandler}>
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
          <h1>RTK Query Create Post</h1>
          <div>
            <label>Title : </label>
            <input
              type="text"
              name="title"
              required
              onChange={onChangeFormhandler}
            />
          </div>
          <div>
            <label>Body : </label>
            <input
              type="text"
              name="body"
              required
              onChange={onChangeFormhandler}
            />
          </div>
          <div>
            <label>userID : </label>
            <input
              type="text"
              name="userId"
              required
              onChange={onChangeFormhandler}
            />
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default CreatePost;
