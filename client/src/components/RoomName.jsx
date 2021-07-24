import React from "react";
import Button from "@material-ui/core/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useHistory } from "react-router-dom";
import './Chats/Chats.scss'

const RoomName = ({ room }) => {
  const history = useHistory();

  return (
    <div className="roomName-container">
      <CopyToClipboard text={room}>
        <div>
          <p className="room-name">{room}</p>
          <small style={{ fontSize: "11px", fontStyle: "italic" }}>
            Click the room name to copy to clipboard
          </small>
        </div>
      </CopyToClipboard>
      <Button
        color="primary"
        style={{ fontSize: "12px" }}
        onClick={() => history.push("/")}
        variant="contained"
      >
        Leave Room
      </Button>
    </div>
  );
};

export default RoomName;
