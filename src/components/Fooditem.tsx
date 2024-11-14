type Props = {
  food: {
    title: string;
    image: string;
    id: number;
    imageType: string;
  };
  condition : boolean
  setcondition : (condition : boolean) => void
};

export default function Fooditem({ food  , condition , setcondition}: Props) {
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
      <img src={food.image} alt={food.title}></img>
      <button onClick={() => setcondition(true)}>view details</button>
    </div>
  );
}
