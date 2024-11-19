import { useEffect } from "react";
import { useState } from "react";
type Props = { setcondition: (condition: boolean) => void; id: number };

export default function Details({ id, setcondition }: Props) {

  const [Food, setFood] = useState();
  const [loading , setloading] = useState(true)

  // TODO :  IMPLEMENT AUTHORIZATION WITH API KEY
  const apikey2 = "27e46fa25000422a9d086b95d4e8ab3d";
  useEffect(() => {
    async function fetchdata() {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apikey2}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await res.json();
      console.log(data);
      setFood(data);
      setloading(false)
    }

    fetchdata();
  }, [id]);

  function handleclick() {
    setcondition(false);
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
        zIndex: 9999, // very high value
      }}
    >
      <div
        style={{
          margin: "auto",
          textAlign: "center",
          backgroundColor: "white",
          color: "black",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "800px",
          marginTop: "20px", // increase margin-top
        }}
      >
        <div className="details">
        <div>food id : {id}</div>
        This is on top of everything!
        
        {loading? <h1>loading...</h1> : <div>
        <div>{Food?.title}</div>
        <img style={{ borderRadius: "8px", width: "100%" ,maxWidth: "400px", height: "auto", objectFit: "cover"}} src={Food?.image} alt={Food?.title}></img>
        <h1 style={{textAlign: "left", color: "#333"}}>Summary :</h1>
        <div style={{ border: "1px solid #ccc" }} dangerouslySetInnerHTML={{ __html: Food?.summary || "" }} />
        </div> }
      </div>
      <button  style={{ marginTop: "16px" , backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "4px", padding: "8px 16px", cursor: "pointer" }} onClick={(e) => handleclick()}>go back</button>
      </div>
    </div>
  );
}
