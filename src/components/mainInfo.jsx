import React from "react";
import { useState } from "react";
import "./styles/mainInfo.css";
import HelpIcon from "@mui/icons-material/Help";
import CloseIcon from '@mui/icons-material/Close';

function MainInfoButton() {

  const [enabled, setEnabled] = useState(false);

  const handleClick = () => {
    setEnabled(!enabled);
  };

  return (
    <>
      <div id="mainInfoButtonContainer" className={enabled ? 'disabled' : ''} onClick={handleClick}>
        <HelpIcon id="mainInfoButton" />
      </div>
      <MainInfoBox active={enabled} exitHandler={handleClick} />
    </>
  );
}

const MainInfoBox = (props) => {

  if (!props.active) return null;


  return (
    <div id="mainInfoBG">
      <div id="mainInfoContainer">
        <ExitMainInfoButton exitHandler={props.exitHandler} />
      </div>
    </div>
  );
};

function ExitMainInfoButton(props)
{
  return (
    <div id="exitMainInfoButton" onClick={props.exitHandler}>
      <CloseIcon />
    </div>
  );
}


export default MainInfoButton;
