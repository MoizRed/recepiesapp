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
        },
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
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "16px",
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}>
        <input
          onChange={handlechange}
          value={Query}
          type="text"
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
            fontSize: "16px",
            width: "100%",
            maxWidth: "400px",
          }}
          placeholder="Search for recipes..."
        />
      </form>
    </>
  );
}
