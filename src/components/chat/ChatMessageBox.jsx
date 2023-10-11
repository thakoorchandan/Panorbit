import "./chatMessageBox.css";
import { useState } from "react";
import {
  MdKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
  MdChevronRight,
} from "react-icons/md";

const ChatMessageBox = ({ user }) => {
  // handles state of messageBox open and close
  const [messageBoxActive, setMessageBoxActive] = useState(true);

  return (
    <div className={`chatMessageBox ${messageBoxActive && "messageBoxActive"}`}>
      <div className="chatBox">
        <div
          className="chatInfo"
          onClick={() => {
            setMessageBoxActive((state) => !state);
          }}
        >
          <div className="heading">
            <img src={user?.profilepicture} width="30px" alt="" />
            <p>{user?.name}</p>
          </div>
          {/* Arrow up when chat is closed, arrow Down when chat is open */}
          {!messageBoxActive ? (
            <MdKeyboardArrowUp size={25} />
          ) : (
            <MdOutlineKeyboardArrowDown size={25} />
          )}
        </div>
        {/* Messages of Agent and Visitor */}
        <div className="messages">
          <div className="message agent">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="message agent">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="time">
            <p>9:16 PM</p>
          </div>
          <div className="message customer">
            <p>Lorem ipsum dolor.</p>
          </div>
          <div className="message customer">
            <p>Lorem ipsum.</p>
          </div>
          <div className="message agent">
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="message customer">
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        {/* Message Input Box */}
        <div className="messageInput">
          <input type="text" />
          <MdChevronRight fontWeight={"bold"} />
        </div>
      </div>
    </div>
  );
};

export default ChatMessageBox;
