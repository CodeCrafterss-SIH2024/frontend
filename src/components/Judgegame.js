// Judgegame.js
import React, { useState } from "react";
import RoleSelection from "./RoleSelection";
import ChatWindow from "./ChatWindow";
import JudgeVerdict from "./JudgeVerdict";

const Judgegame = () => {
  const [judge, setJudge] = useState("");
  const [lawyer1, setLawyer1] = useState("");
  const [lawyer2, setLawyer2] = useState("");
  const [isChatActive, setIsChatActive] = useState(false);
  const [messages, setMessages] = useState([]);

  const startConversation = (judgeName, lawyer1Name, lawyer2Name) => {
    setJudge(judgeName);
    setLawyer1(lawyer1Name);
    setLawyer2(lawyer2Name);
    setIsChatActive(true);
  };

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="App">
      {!isChatActive ? (
        <RoleSelection onStart={startConversation} />
      ) : (
        <div>
          <ChatWindow
            lawyer1={lawyer1}
            lawyer2={lawyer2}
            messages={messages}
            addMessage={addMessage}
          />
          <JudgeVerdict judge={judge} messages={messages} />
        </div>
      )}
    </div>
  );
};

export default Judgegame;
