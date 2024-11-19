type Props = {
  food: {
    title: string;
    image: string;
    id: number;
    imageType: string;
  };
  setcondition: (condition: boolean) => void;
  setid: (id: number) => void;
};

export default function Fooditem({ setid, food, setcondition }: Props) {
  function handleclick() {
    setcondition(true);
    setid(food.id);
  }

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "8px 0",
        width: "300px",
        minHeight: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "left",
      }}
    >
      <h1>{food.title}</h1>
      <img style={{ width: "300px", height: "200px", borderRadius:  "8px" , boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}} src={food.image} alt={food.title}></img>
      <button style={{ marginTop: "16px" , backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "4px", padding: "8px 16px", cursor: "pointer" }} onClick={() => handleclick()}>view details</button>
      <div>food id : {food.id}</div>
    </div>
  );
}
