import Navbar from '../components/Navbar'
import Card from '../components/Card'
import CopyModal from '../components/Modal'
import Footer from '../components/Footer'
import './common/main.css'
import copyInput from 'clipboard-copy';
import React, { useState } from 'react'

function Main() {

  const [Darken, setDark] = useState(false);
  const [usrInput, setInput] = useState('');

  function handleUsrCopy() {
     copyInput(usrInput);
  }

  function handleInputChange(e) {
    const value = e.target.value;
    setInput(value);
  }

  function ToggleDark() {
    setDark(prevVal => !prevVal);
  }

  return (
    <React.Fragment>
      <Navbar ToggleDark={ToggleDark} isDark={Darken} />
      <main className={Darken ? 'main-container dark' : 'main-container'}>
        <CopyModal/>
        <Card isDark={Darken} inputChange={handleInputChange} userInput={usrInput} handleCopy={handleUsrCopy} />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Main
