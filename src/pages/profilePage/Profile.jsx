import "./profile.css";
import { Dashboard } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchActiveUser } from "../../pages/profilePage/singleUserSlice";

const Profile = () => {
  // get ActiveUser from Store
  const user = useSelector((state) => state.activeUser.activeUser);

  // Get Required user Id
  const { id } = useParams();
  const dispatch = useDispatch();

  // Fetch data of required user using ID
  useEffect(() => {
    dispatch(fetchActiveUser(id));
  }, [dispatch, id]);

  return (
    // Children inside Dashboard will be render inside Main content by Dashboard Component
    <Dashboard pageTitle={"Profile"}>
      <div className="profileContent">
        <div className="userDetails">
          <div className="personalDetails">
            <img width={"200px"} src={user.profilepicture} alt="" />
            <h3>{user.name}</h3>
            <div className="details">
              <div className="detail">
                <span className="label">Username :</span>
                <span className="value">{user.username}</span>
              </div>
              <div className="detail">
                <span className="label">e-mail :</span>
                <span className="value">{user.email}</span>
              </div>
              <div className="detail">
                <span className="label">Phone :</span>
                <span className="value">{user.phone}</span>
              </div>
              <div className="detail">
                <span className="label">website :</span>
                <span className="value">{user.website}</span>
              </div>
            </div>
          </div>
          <div className="companyDetails">
            <p>Company</p>
            <div className="details">
              <div className="detail">
                <span className="label">Name :</span>
                <span className="value">{user.company?.name}</span>
              </div>
              <div className="detail">
                <span className="label">catchphrase :</span>
                <span className="value">{user.company?.catchPhrase}</span>
              </div>
              <div className="detail">
                <span className="label">bs :</span>
                <span className="value">{user.company?.bs}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="userAddress">
          <p>Address</p>
          <div className="details">
            <div className="detail">
              <span className="label">Street :</span>
              <span className="value">{user.address?.street}</span>
            </div>
            <div className="detail">
              <span className="label">Suite :</span>
              <span className="value">{user.address?.suite}</span>
            </div>
            <div className="detail">
              <span className="label">City :</span>
              <span className="value">{user.address?.city}</span>
            </div>
            <div className="detail">
              <span className="label">Zipcode :</span>
              <span className="value">{user.address?.zipcode}</span>
            </div>

            <div className="map">
              <iframe
                title="map"
                width={"100%"}
                height={"400px"}
                src={`https://maps.google.com/maps?q=${user.address?.geo.lat},${user.address?.geo.lng}&hl=es;&output=embed`}
              ></iframe>
              <div className="latLongDetails">
                <p>
                  <span>Lat : </span>
                  {user.address?.geo.lat} <span>Long : </span>
                  {user.address?.geo.lng}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Profile;
