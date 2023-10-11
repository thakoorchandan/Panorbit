import "./chatBox.css";
import { RxChatBubble } from "react-icons/rx";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";
import ChatMessageBox from "./ChatMessageBox";

const ChatBox = () => {
  // To Handle Chat Box and Message box open and close
  const [chatBoxActive, setChatBoxActive] = useState(false);
  const [messageBoxActive, setMessageBoxActive] = useState(false);
  // This is the user in chat message box (Agent)
  const [inboxUser, SetInboxUser] = useState("");
  //get users from store to display in chat box
  const users = useSelector((state) => state.users.users);

  // handles Message Inbox open and set agent in chat
  const handleChatUserClick = (user) => {
    setMessageBoxActive((state) => !state);
    SetInboxUser(user);
  };

  return (
    <div className="chatContainer">
      {/* Chat Message box is displayed if chatBox is Active*/}
      {messageBoxActive && chatBoxActive && <ChatMessageBox user={inboxUser} />}

      <div className="chatBox">
        <div
          className="chatInfo"
          onClick={() => setChatBoxActive((state) => !state)}
        >
          <div className="heading">
            <RxChatBubble size={22} />
            <p>Chats</p>
          </div>
          {/* Dispaly arrow UP if chat is closed, DownArrow if chat opened */}
          {!chatBoxActive ? (
            <MdKeyboardArrowUp size={25} />
          ) : (
            <MdOutlineKeyboardArrowDown size={25} />
          )}
        </div>

        <div className="chatUsersWrapper">
          <div className={`chatUsers ${chatBoxActive && "usersBoxActive"}`}>
            {/* display user's to initiate Chat */}
            {users.map((user, index) => (
              <div key={user.id} className="chatUserWrapper">
                <div
                  className="chatUser"
                  onClick={() => handleChatUserClick(user)}
                >
                  <img width={"30px"} src={user?.profilepicture} alt="" />
                  <p>{user?.name}</p>
                </div>
                {/* Index is kind of place holder for online Status of User (Agent) */}
                <div
                  className={`online ${index % 2 === 0 ? "gray" : "green"}`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
