import "./laoding.css";

const UserSkeletonLoading = () => {
  // Skeleton Loading - (To make feel user engaging and visualzing something is loading)
  return (
    <div className="users">
      <li className="user skeleton">
        <div className="avatar" />
        <div className="name" />
      </li>
      <li className="user skeleton">
        <div className="avatar" />
        <div className="name" />
      </li>
      <li className="user skeleton">
        <div className="avatar" />
        <div className="name" />
      </li>
      <li className="user skeleton">
        <div className="avatar" />
        <div className="name" />
      </li>
      <li className="user skeleton">
        <div className="avatar" />
        <div className="name" />
      </li>
      <li className="user skeleton">
        <div className="avatar" />
        <div className="name" />
      </li>
    </div>
  );
};

export default UserSkeletonLoading;
