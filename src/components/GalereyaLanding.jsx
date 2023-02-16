import { useState } from "react";

export default function GalereyaLanding(props) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div
      className={
        isZoomed
          ? "galereya-com galereya-com-act my-transitoin"
          : "galereya-com my-transitoin"
      }
      style={{
        width: isZoomed ? "100vw" : props.width,
        height: isZoomed ? "calc(100vh - 57px)" : props.height,
      }}
      onClick={handleClick}
    >
      <img
        src={props.pic}
        alt=""
        className={isZoomed ? " galereya-pic-zoom" : "galereya-com-img"}
      />
      <div className={isZoomed ? "the-hidden-thing" : "galereya-up"}> </div>
      <div className={isZoomed ? "the-hidden-thing" : "galereya-down"}> </div>
    </div>
  );
}
