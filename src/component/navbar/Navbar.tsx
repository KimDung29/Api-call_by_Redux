import { useNavigate } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav">
        <p
          onClick={() => {
            navigate("/users");
          }}
        >
          Users
        </p>
        <p
          onClick={() => {
            navigate("/photos");
            window.location.reload();
          }}
        >
          Photos
        </p>
      </div>
    </>
  );
};

export default NavBar;
