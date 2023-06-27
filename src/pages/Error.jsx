// eslint-disable-next-line react/prop-types
const Error = ({ error }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Error... {error}</h1>
    </div>
  );
};

export default Error;
