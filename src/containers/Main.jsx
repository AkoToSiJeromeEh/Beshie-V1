import Navbar from '../components/Navbar'
import Card from '../components/Card'
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
    <main>
        <Card/>
    </main>
    </React.Fragment>
  )
}

export default Main