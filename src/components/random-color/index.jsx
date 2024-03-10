import { useEffect } from "react";
import { useState } from "react";

export default function RandomColor() {
  // 1. 유형 설정 (16진수 or RGB)
  const [tyofColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  // 주어진 length 값 사이의 임의의 정수를 반환
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  // ex) #678764
  function handleCreateRandomhexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    console.log(r, g, b);
    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (tyofColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomhexColor();
  }, [tyofColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      {/* "RGB 색상 생성" 버튼을 클릭하여 색상 형식을 "rgb"로 변경 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button className="btn" onClick={() => setTypeOfColor("hex")}>
          16진수 모드
        </button>
        <button className="btn" onClick={() => setTypeOfColor("rgb")}>
          RGB 모드
        </button>
        <button
          className="btn"
          onClick={
            tyofColor === "hex"
              ? handleCreateRandomhexColor
              : handleCreateRandomRgbColor
          }
        >
          {tyofColor === "hex" ? "16진수 색상 생성" : "RGB 색상 생성"}
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
        }}
      >
        <h3> {tyofColor === "hex" ? "16진수 " : "RGB "}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
