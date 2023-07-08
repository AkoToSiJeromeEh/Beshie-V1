import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import './common/main.css'
import React, {useState} from 'react'

function Main() {

  const [Darken , setDark] = useState(false);
  
  function ToggleDark () {

    setDark(preval => !preval);
  }
  return (
    <React.Fragment>
    <Navbar
    ToggleDark={ToggleDark}
    isDark={Darken}
    />
    <main className={Darken ? 'main-container dark' : 'main-container'}>
        <Card
        isDark={Darken}
        />
    </main>
    <Footer/>
    </React.Fragment>
  )
}

export default Main