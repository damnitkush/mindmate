import React from "react";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../context/userContext";
import { socket } from "../../App";

const ChatSection = () => {
  const { localUser } = useContext(UserContext);

  const [username] = useState(localUser.fname);
  // const [setShowChat] = useState(false);
  const [room] = useState(1);

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  // const joinRoom = () => {
  //   if (username !== "" && room !== "") {
  //     setShowChat(true);
  //   }
  // };
  socket.username = username;
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };
  socket.emit("join_room", room);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
    return () => socket.removeListener("receive_message");
  }, []);
  console.log(socket.username);
  return (
    <div className="rounded-2xl relative bg-primary-50 w-full flex flex-col h-[650px] overflow-scroll border">
      <div className=" text-xl rounded-tl-2xl rounded-tr-2xl bg-white font-bold px-6 text-slate-800 py-4 sticky top-0 ">
        Saksham
      </div>
      <div className="flex flex-col relative h-full rounded-br-2xl rounded-bl-2xl">
        <div className="h-full w-full px-6 py-8 flex flex-col justify-end gap-4 ">
          {messageList.map((messageContent) => {
            return (
              <div
                className={`flex w-full ${
                  username === messageContent.author
                    ? "justify-end"
                    : "items-start"
                }
            `}
              >
                <div
                  className={`flex max-w-lg px-4 py-2 rounded-lg ${
                    username === messageContent.author
                      ? "flex-row-reverse items-end bg-primary-400"
                      : "items-start bg-white"
                  }
                `}
                >
                  <div
                    id={username === messageContent.author ? "you" : "other"}
                  >
                    <p>{messageContent.message}</p>
                    <div
                      className={`flex ${
                        username === messageContent.author && "flex-row-reverse"
                      }`}
                    >
                      <span className="time text-slate-500 text-xs">
                        {messageContent.time}
                      </span>
                      {/* <p id="author">{messageContent.author}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex bg-white border sticky bottom-0">
          <input
            type="text"
            value={currentMessage}
            className="bg-white w-full py-4 px-6 focus-visible:outline-none focus-visible:bg-slate-50 "
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <button
            onClick={sendMessage}
            className="p-4 hover:bg-primary-200 transition-all cursor-pointer"
          >
            &#9658;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
