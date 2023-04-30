import "./tableUser.css";
import { RootState } from "../../redux/reducer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "../navbar/Navbar";

const TableUsers = () => {
  const userData = useSelector((state: RootState) => state.users);
  const navigate = useNavigate();

  return (
    <>
      <div>
        <NavBar />
        <div>
          <h2>Users</h2>
        </div>
        <div className="containerTable">
          <div className="mainTable">
            <table className="tableUser">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website</th>
                  <th>City</th>
                  <th>Company Name</th>
                </tr>
              </thead>
              <tbody>
                {userData.usersInfo.length > 0 ? (
                  userData.usersInfo.map((user: any) => (
                    <tr
                      key={user.id}
                      onClick={() => {
                        navigate(`/users/${user.id}`);
                      }}
                    >
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.website}</td>
                      <td>{user.address.city}</td>
                      <td>{user.company.name}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8}>No user</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default TableUsers;
