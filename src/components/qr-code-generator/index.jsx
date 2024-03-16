import { useState } from "react";
import QRCode from "react-qr-code";
import "../qr-code-generator/styles.css";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleQRCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>QR코드 생성기</h1>
      <div className="input-container">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          name="qr-code"
          value={input}
          placeholder="URL을 입력해주세요"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleQRCode}
        >
          생성
        </button>
      </div>
      <div className="qr-container">
        <QRCode id="qrcode-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
