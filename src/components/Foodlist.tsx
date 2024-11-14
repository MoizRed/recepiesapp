import Fooditem from "./Fooditem.tsx";

type Props = {
  results: { id: number; title: string; image: string; imageType: string }[];
  setcondition : (condition : boolean) => void
};

export default function Foodlist({ results , setcondition}: Props) {
  return (
    <div>
      <div style={{  display: "flex", justifyContent: "flex-start", alignItems: "center", flexWrap: "wrap", columnGap: "16px", rowGap: "16px", padding: "16px"}}>
        {results.map((e) => (
          <div key={e.id}>
            <Fooditem key={e.id} food={e} setcondition={setcondition}/>
          </div>
        ))}
      </div>
    </div>
  );
}
//TODO : creat item food component
