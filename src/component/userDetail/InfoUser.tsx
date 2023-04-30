import { useParams } from "react-router-dom";
import "./userDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducer";
import { onInputChange } from "../../redux/usersSlice";
import { useState } from "react";
import { UserType } from "../../redux/apiCall";

const InfoUser = () => {
  const param = useParams();
  const { usersInfo } = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch();

  const currentUser: UserType[] = usersInfo.filter(
    (user: UserType) => String(user.id) === param.id
  );

  const [isDisplay, setDisplay] = useState(true);
  const [email, setEmail] = useState(currentUser[0]?.email);
  const [phone, setPhone] = useState(currentUser[0]?.phone);
  const [website, setWebsite] = useState(currentUser[0]?.website);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(onInputChange({ email, phone, website }));
    setDisplay(true);
  };

  const handleReset = () => {
    setDisplay(false);
    setEmail(currentUser[0]?.email);
    setPhone(currentUser[0]?.phone);
    setWebsite(currentUser[0]?.website);
  };
  return (
    <>
      <h2>{currentUser[0]?.name}</h2>

      <div className="showDetail">
        <div className="leftSide">
          <div className="showDetailUser">
            <h3>Personal: </h3>
            <div className="user_detail">
              <p className="user_title">Id: </p>
              <p className="user_fw">{currentUser[0]?.id}</p>{" "}
            </div>
            <div className="user_detail">
              <p className="user_title"> Username:</p>
              <p className="user_fw">{currentUser[0]?.username}</p>{" "}
            </div>
          </div>

          <div className="showDetailUser">
            <h3 className="user_title">Address: </h3>
            <div className="user_detail">
              <p className="user_title">Street: </p>
              <p className="user_fw">{currentUser[0]?.address?.street}</p>{" "}
            </div>
            <div className="user_detail">
              <p className="user_title"> Suite:</p>
              <p className="user_fw">{currentUser[0]?.address?.suite}</p>{" "}
            </div>
            <div className="user_detail">
              <p className="user_title"> City:</p>
              <p className="user_fw">{currentUser[0]?.address?.city}</p>{" "}
            </div>
            <div className="user_detail">
              <p className="user_title"> Zipcode:</p>
              <p className="user_fw">{currentUser[0]?.address?.zipcode}</p>{" "}
            </div>
          </div>
          <div className="showDetailUser">
            <h3 className="user_title">Company: </h3>
            <div className="user_detail">
              <p className="user_title">Name: </p>
              <p className="user_fw">{currentUser[0]?.company.name}</p>{" "}
            </div>
            <div className="user_detail">
              <p className="user_title"> CatchPhrase:</p>
              <p className="user_fw">
                {currentUser[0]?.company?.catchPhrase}
              </p>{" "}
            </div>
            <div className="user_detail">
              <p className="user_title"> Bs:</p>
              <p className="user_fw">{currentUser[0]?.company?.bs}</p>{" "}
            </div>
          </div>
        </div>
        <div className="rightSide">
          <h3>Contact: </h3>
          {isDisplay ? (
            <div className="showDetailUser">
              <div className="user_detail">
                <p className="user_title">Email: </p>
                <p className="user_fw">{email}</p>{" "}
              </div>
              <div className="user_detail">
                <p className="user_title"> Website:</p>
                <p className="user_fw">{website}</p>{" "}
              </div>
              <div className="user_detail">
                <p className="user_title"> Phone:</p>
                <p className="user_fw">{phone}</p>{" "}
              </div>
              <button
                className="button editBtn"
                onClick={() => setDisplay(false)}
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="editContactForm">
              <form onSubmit={handleSubmit}>
                <label>Email: </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="email"
                  value={email}
                />

                <label>Phone: </label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  name="phone"
                  value={phone}
                />

                <label>Website: </label>
                <input
                  onChange={(e) => setWebsite(e.target.value)}
                  type="text"
                  name="website"
                  value={website}
                />

                <button className="button submitBtn" type="submit">
                  Submit
                </button>
              </form>
              <button onClick={handleReset} className="button resetBtn">
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default InfoUser;
