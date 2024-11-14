type Props = {setcondition : (condition : boolean) => void}

export default function Details({ setcondition}: Props) {
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
    <div style={{ 
      margin: "auto", 
      textAlign: "center", 
      backgroundColor: "white", 
      color: "black", 
      padding: "20px", 
      borderRadius: "8px", 
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
      maxWidth: "400px" ,
      marginTop: "20px", // increase margin-top
    }}>
      This is on top of everything!
      <button onClick={e => setcondition(false)}>go back</button>
    </div>
  </div>
  )
};