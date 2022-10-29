import NotFoundImg from "../../assets/images/404.jpg";

const NotFound = () => {
  return (
    <div>
      <img
        src={NotFoundImg}
        alt="404"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};
export default NotFound;
