import React from "react";
import { useState } from "react";
import "./styles/helpButton.css";
import HelpIcon from "@mui/icons-material/Help";
import LogoImage from "../images/logo.png";
import "./subcomponents/styles/modal.css";

const HelpMenu = ({ active }) => {
  if (!active) return null;

  return (
    <>
      <div className="modal">
        <section className="modal-main">
          <img src={LogoImage} alt="Help 1" />
          <p>Texto imagen 1</p>
        </section>
      </div>
    </>
  );
};

function HelpButton() {
  const [enabled, setEnabled] = useState(false);

  const handleClick = () => {
    setEnabled(!enabled);
  };
  return (
    <>
      <div id="helpButtonContainer" onClick={handleClick}>
        <HelpIcon id="helpButton" />
      </div>
      <HelpMenu active={enabled} />
    </>
  );
}

export default HelpButton;
