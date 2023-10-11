import "./dashboard.css";
import { Sidebar, Navbar, ChatBox } from "../../components";

const Dashboard = ({ children, pageTitle }) => {
  // Layout for Dashboard - renders sidebar, Navigation and Main content
  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <Navbar pageTitle={pageTitle} />
        {children}
      </main>
      <ChatBox />
    </div>
  );
};

export default Dashboard;
