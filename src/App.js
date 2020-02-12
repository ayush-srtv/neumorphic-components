import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineLinkedin } from "react-icons/ai";
import Button from "./components/button";
import Card from "./components/cards";
import "./styles.css";

export default function App() {
  return (
    <IconContext.Provider value={{ size: "1em" }}>
      <div className="App">
        <div>Buttons</div>
        <div className="buttons">
          <Button>Button</Button>
          <Button variant>
            <span style={{ fontSize: "16px" }}>
              <AiOutlineLinkedin />
            </span>
          </Button>
        </div>
        <div>Cards</div>
        <div className="cards">
          <Card icon={<AiOutlineLinkedin />} />
        </div>
      </div>
    </IconContext.Provider>
  );
}
