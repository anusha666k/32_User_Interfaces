import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ChromePicker } from "react-color";


function Pickercolor() {
  const [colors, setColors] = useState(null);
  const colorPicker = e => {
    const newColor = {
      hex: e.hex,
      rgb: "(" + e.rgb.r + "," + e.rgb.g + "," + e.rgb.b + "," + e.rgb.a + ")"
    };
    setColors(newColor);
  };
  return (
    <div className="App">
      <h3>React Color Picker</h3>
     
      <div style={{ wodth: "50%", float: "left" }}>
        <ChromePicker
          color={colors !== null && colors.hex}
          onChange={e => colorPicker(e)}
          disableAlpha
          renderers={false}
        />
      </div>
      {colors !== null && (
        <React.Fragment>
          Hex: {colors.hex}
          <br />
          RGBa: {colors.rgb}
        </React.Fragment>
      )}
    </div>
  );
}
export default Pickercolor;

