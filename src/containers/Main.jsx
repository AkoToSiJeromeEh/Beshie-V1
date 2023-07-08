import Navbar from "../components/Navbar";
import Card from "../components/Card";
import CopyModal from "../components/Modal";
import Footer from "../components/Footer";
import "./common/main.css";
import copyInput from "clipboard-copy";
import React, { useState } from "react";

function Main() {
  const [Darken, setDark] = useState(false);
  const [usrInput, setInput] = useState("");
  const [emoji, setTextWithEmojis] = useState("");
  const [showModal, setModal] = useState(false);

  function ToggleDark() {
    setDark((prevVal) => !prevVal);
  }

  function handleUsrCopy() {
    if (usrInput !== "") {
      setModal(true);
      copyInput(emoji);
    } else {
      setModal(false);
    }
  }
  function ShowTModal() {
    setModal((preval) => !preval);
  }

  function updateTextWithEmojis(text) {
    const splitWords = text.split(' ');
    const textWithEmojis = splitWords.map((word) => {
      return `${word} 🤸‍♂️`;
    });
    setTextWithEmojis(textWithEmojis.join(' '));
  }
  
  
  function handleInputChange(e) {
    const value = e.target.value;
    setInput(value);
    updateTextWithEmojis(value);
  }
  


  return (
    <React.Fragment>
      <Navbar ToggleDark={ToggleDark} isDark={Darken} />
      <main className={Darken ? "main-container dark" : "main-container"}>
        <CopyModal isDark={Darken} isShow={showModal} closeModal={ShowTModal} />
        <Card
          isDark={Darken}
          inputChange={handleInputChange}
          userInput={usrInput}
          handleCopy={handleUsrCopy}
          emojiWithText={emoji}
        />
      </main>
      <Footer 
       isDark={Darken}
      />
    </React.Fragment>
  );
}

export default Main;
