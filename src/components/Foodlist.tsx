type Props = {
  results: { id: number; title: string; image: string; imageType: string }[];
};

export default function Foodlist({ results }: Props) {
  return (
    <div>
      <div >
        {results.map((e) => (
          <li key={e.id}>
            <h1 >{e.title}</h1>
            <img  src={e.image} alt={e.title}></img>
          </li>
        ))}
      </div>
    </div>
  );
}
//TODO : creat item food component