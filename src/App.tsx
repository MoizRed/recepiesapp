import Search from "./components/Search.tsx";
import { useState } from "react";
import Foodlist from "./components/Foodlist.tsx";

export default function App() {
  const [recipes, setrecepies] = useState([]);
  return (
    <>
      <Search setrecepies={setrecepies} />
      <Foodlist results={recipes} />
    </>
  );
}
