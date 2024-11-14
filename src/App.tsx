import Search from "./components/Search.tsx";
import { useState } from "react";
import Foodlist from "./components/Foodlist.tsx";
import Nav from "./components/Nav.tsx";
import "./app.css";
import Details from "./components/Details.tsx";
export default function App() {
  const [recipes, setrecepies] = useState([]);
  const [condition , setcondition] = useState(false);
  return (
    <>
      <Nav />
      <Search setrecepies={setrecepies} />
      <Foodlist results={recipes}  setcondition={setcondition} />
      {condition ? <Details  setcondition={setcondition} /> : null}
    </>
  );
}
