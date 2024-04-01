import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from "./Components/header/header.jsx";
import Wcontent from "./Components/Wcontent/wcontent.jsx";
import BodyMenu from "./Components/BMenu/Bmenu.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Wcontent />
      <BodyMenu />

      <div>
        <p>text</p>
      </div>

    </>
  );
}

export default App