import Fooditem from "./Fooditem.tsx";

type Props = {
  results: { id: number; title: string; image: string; imageType: string }[];
  setcondition: (condition: boolean) => void;
  setid: (id: number) => void;
};

export default function Foodlist({ setid, results, setcondition }: Props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
          columnGap: "16px",
          rowGap: "16px",
          padding: "16px",
        }}
      >
        {results.map((e) => (
          <div key={e.id}>
            <Fooditem
              key={e.id}
              setid={setid}
              food={e}
              setcondition={setcondition}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
//TODO : creat item food component
