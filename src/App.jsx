import './App.css'

import Header from "./Components/header/header.jsx";
import Wcontent from "./Components/Wcontent/wcontent.jsx";
import BodyMenu from "./Components/BMenu/Bmenu.jsx";
import FooterCont from "./Components/footer/Footercontent.jsx";

function App() {
  return (
    <>
      <Header />
      <Wcontent />
      <BodyMenu />
      <FooterCont />
    </>
  );
}
export default App