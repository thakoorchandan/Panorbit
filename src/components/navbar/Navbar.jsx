import "./navbar.css";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchActiveUser } from "../../pages/profilePage/singleUserSlice";
import { Loading, ProfileModal } from "../../components";
import { fetchUsers } from "../../pages/landingPage/usersSlice";

const Navbar = ({ pageTitle }) => {
  // to handle Profile Modal
  const [modalOpened, setModalOpened] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  // ref to use Close Modal if clicked outside the modal
  const modalRef = useRef();
  const profileInfoRef = useRef();

  // retrive active user from store
  const { activeUser, loading } = useSelector((state) => state.activeUser);
  // retrive users from store
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    // fetchUsers get the data of all users
    dispatch(fetchUsers());
    // fetchActiveUser get the data active users
    dispatch(fetchActiveUser(id));

    const handleOutsideClick = (event) => {
      // close the modal if clicked outside
      if (
        !modalRef.current.contains(event.target) &&
        !profileInfoRef.current.contains(event.target)
      ) {
        setModalOpened(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);

    // cleanup function to remove event on window if component unmount
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [dispatch, id]);

  return (
    <>
      {loading && <Loading />}
      <div className="navbar">
        <h3 className="PageTitle">{pageTitle}</h3>
        <div className="userProfile">
          <div
            className="activeUserInfo"
            onClick={() => setModalOpened((state) => !state)}
            ref={profileInfoRef}
          >
            <img width="35px" src={activeUser.profilepicture} alt="" />
            <p className="userName">{activeUser.name}</p>
          </div>

          <div className="profileModalWrapper" ref={modalRef}>
            {/* Profile Modal, display Active User Detail's, Other Users list and Logout option */}
            <ProfileModal
              activeUser={activeUser}
              users={users}
              modalOpened={modalOpened}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
