import Search from "./components/Search.tsx";
import { useState } from "react";
import Foodlist from "./components/Foodlist.tsx";
import Nav from "./components/Nav.tsx";
import "./app.css";
import Details from "./components/Details.tsx";
export default function App() {
  const [recipes, setrecepies] = useState([]);
  const [condition, setcondition] = useState(false);
  const [id, setid] = useState();

  return (
    <>
      <Nav />
      <Search setrecepies={setrecepies} />
      <Foodlist setid={setid} results={recipes} setcondition={setcondition} />
      {condition ? <Details id={id} setcondition={setcondition} /> : null}
    </>
  );
}
