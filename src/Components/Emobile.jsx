import { useState } from "react";
import "./Emobile.css";

const Emobile = () => {
  const [aspectRatio, setAspectRatio] = useState("16:9");

  const resolutions = {
    "16:9": { width: 10, height: 16 },
    "21:9": { width: 10, height: 21 },
    "5:4": { width: 16, height: 21 },
  };

  const currentResolution = resolutions[aspectRatio];

  return (
    <div>
      <h1>Aplicativos Mobile</h1>
    <div className="wrapper">
      
      <div
        className="phone-container"
        style={{
          width: `${currentResolution.width * 23}px`, // Ajuste para ampliação
          height: `${currentResolution.height * 23}px`, // Ajuste para ampliação
        }}
      >
        <div className="screen">
          <div className="content">
            <h2>Design Responsivo</h2>
            <p>Pensados para funcionar perfeitamente em dispositivos móveis</p>
            <p>Além disso, desenvolvo aplicativos modernos e intuitivos para atender às suas necessidades.</p>
          </div>
        </div>
        <div className="home-button"></div>
      </div>

      <div className="controls">
        <h2>Proporções</h2>
        <button
          className="control-button"
          onClick={() => setAspectRatio("16:9")}
        >
          <img src="https://cdn-icons-png.flaticon.com/512/41/41681.png" alt="small-phone" width={19} />
Celular pequeno
          <div></div>
        </button>
        <button
          className="control-button"
          onClick={() => setAspectRatio("21:9")}
        >
          <img src="https://cdn-icons-png.flaticon.com/256/41/41677.png" alt="medium-phone" width={19} />
          Celular Médio
          <div></div>
         
        </button>
        <button
          className="control-button"
          onClick={() => setAspectRatio("5:4")}
        >
          <img src="https://cdn.icon-icons.com/icons2/1788/PNG/512/tableticon_114499.png" alt="tablet" width={19} />
          Tablet
          <div></div>
         
        </button>
      </div>

      </div>
    </div>
  );
};

export default Emobile;
