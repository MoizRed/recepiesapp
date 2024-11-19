type Props = {};

export default function Nav({}: Props) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        backgroundColor: "#333",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          Recipe book
        </a>
      </h1>
    </nav>
  );
}
