import React, { useState } from "react";

function HForm() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const changeHandler = (e) => {
    setName({
      ...name,
      firstName: e.target.value,
    });
  };
  const m={
    backgroundImage:"url('https://wallpaperaccess.com/full/1567674.jpg')",
backgroundSize: "1550px",

  }
const c={
  position: "absolute",
  top: "100%",
  left: "49%",
  transform: "translate(-50%, -50%)",

}
const n={
  fontFamily:" 'Yellowtail'",
  color:"#FBFCFC",
  fontSize:"48px",
}
const h={
  fontFamily:" 'Courgette', cursive",
  color:"#CB4335 ",
  fontSize:"48px",
}
const h2={
  fontFamily:" 'Courgette', cursive",
  color:"#C0392B",
  fontSize:"25px",
}
const cake={
  width:"500px",
  height:"500px",
}
const st12 = {
  border: "dashed",
  backgroundColor: "rgba(0, 0, 0, 0)",
  borderColor:"#C0392B",
  color:"#C0392B",
  fontFamily:" 'Courgette', cursive",
  fontSize:"15px"
}

  return (
    <div style={m}>
      <br></br>
      <h1 style={h}>Form Using Hooks</h1>
      <div>
     <h4 style={h2}>Enter the Name (To print on the cake):</h4>
      <input type="text"  style={st12} onChange={changeHandler} />
      </div>
      <br></br>
  <img src="https://previews.123rf.com/images/tiler84/tiler841504/tiler84150400025/39177879-top-view-of-round-chocolate-cake-with-cream-isolated-on-black-background.jpg" alt="Snow"  style={cake}></img>
  <div class="centered" style={c}><h1 style={n}>{name.firstName}</h1></div>
    </div>
  );
}

export default HForm; 