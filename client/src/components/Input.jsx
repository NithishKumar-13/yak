import React, { useState } from "react";
import { Picker } from "emoji-mart";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import { useThemeContext } from "../context/ThemeContext"
import "../components/Chats/Chatjs.scss"
import "emoji-mart/css/emoji-mart.css";

const Input = ({ message, setMessage, sendMessage }) => {
  const [, setTheme, themes] = useThemeContext();
  const [toggleEmojiPicker, setToggleEmojiPicker] = useState(false);

  let emojiPicker;

  if (toggleEmojiPicker) {
    emojiPicker = (
      <Picker
        title="Pick your emoji"
        emoji="point_up"
        style={{ position: "absolute", top: '50%',left:'50%',transform:'translate(-50%,-50%)'}}
        onSelect={(emoji) => setMessage(message + emoji.native)}
      />
    );
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setMessage("");
  };

  return (
    <div className="input-box">
        <div>
      <SentimentVerySatisfiedIcon
        className="emoji"
        onClick={() => setToggleEmojiPicker((prevSt) => !prevSt)}
      />
      {emojiPicker}
      </div>
      <form className="formee" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={message}
          onChange={(evt) => setMessage(evt.target.value)}
          onKeyPress={(evt) => (evt.key === "Enter" ? sendMessage() : null)}
          placeholder="Send message"
        />
      </form>
      <div className="themes">
        {themes.map((theme) => {
          return (
            <div
              className="theme"
              style={{
                backgroundColor: theme.displayColor,
                height: "1.5rem",
                width: "1.5rem",
                borderRadius: "50%",
              }}
              onClick={() => setTheme({ currentTheme: theme })}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Input;
