import "./landingPage.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";
import { SkeletonLoading, UserList } from "../../components";

const LandingPage = () => {
  // get users and loading status from store
  const { users, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // This will fetch user's from api after component mount
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="landingPage">
      <div className="usersContainer">
        <div className="title">
          <h4>Select an account</h4>
        </div>
        {/* Show's Skeleton Loading, while the request is pending */}
        {loading ? (
          <SkeletonLoading />
        ) : (
          <div className="users-wrapper">
            <UserList users={users} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
