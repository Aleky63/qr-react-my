import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { GENERATE_DATA } from "../constants";

export const GenerateHistory = () => {
  const [data, setData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const update = () => {
      try {
        setData(JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]"));
      } catch {
        setData([]);
      }
    };

    window.addEventListener("storage", update);
    update();

    return () => window.removeEventListener("storage", update);
  }, []);

  return (
    <div>
      {data.length === 0 && <p>История генерации пуста.</p>}
      {data.map((text, idx) => (
        <p key={`${text}-${idx}`}>
          {text}
          <QRCodeSVG value={text} size={100} />
        </p>
      ))}
    </div>
  );
};
