import React from "react";


export default function Toggle1() {
  const [value, setValue] = React.useState(false);

  return (
    <div >
      <div
        className={`checkbox ${value && "checkbox--on"}`}
        onClick={() => setValue(!value)}
      >
        <div className="checkbox__ball"></div>
        <span className="checkbox__text">{value ? "ON" : "OFF"}</span>
      </div>

      <div
        className={`checkbox ${value && "checkbox--on"}`}
        onClick={() => setValue(!value)}
      >
        <div className="checkbox__ball"></div>
        <span className="checkbox__text">{value ? "ON" : "OFF"}</span>
      </div>

      <div
        className={`checkbox ${value && "checkbox--on"}`}
        onClick={() => setValue(!value)}
      >
        <div className="checkbox__ball"></div>
        <span className="checkbox__text">{value ? "ON" : "OFF"}</span>
      </div>
    </div>
  );
}

