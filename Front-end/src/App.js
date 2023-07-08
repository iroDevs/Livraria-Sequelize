import { useState } from "react";
import NavMenu from "./components/NavMenu";
import Body from "./components/Body"
import Description from './components/Description'
function App() {
  const [ body , setBody ] = useState(1)
  return (
    <>
    <Description></Description>
    <NavMenu changeBody={setBody} />
    <Body bodyId={body} />
    </>
  );
}

export default App;
