import { useState } from "react";
import { useEffect } from "react";

type Props = {
  setrecepies: (recipes: {}[]) => void;
};
const apikey2 = "27e46fa25000422a9d086b95d4e8ab3d";
const apikey1 = "c0dc3b18cc97422387a0a9fbce3f15d1";
export default function Search({ setrecepies }: Props) {
  const [Query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${Query}&apiKey=${apikey2}`,
        {
          method: "GET",
        }
      );

      const data = await res.json();
      console.log(data);
      if (data) {
        setrecepies(data.results);
      } else {
        console.log("couldnt find any data , or invalid endpoint");

        return;
      }
    }
    fetchData();
  }, [Query]);

  function handlechange(e: any) {
    setQuery(e.target.value);
  }

  return (
    <>
      <form>
        <input onChange={(e) => handlechange(e)} value={Query} type="text" />
      </form>
    </>
  );
}
