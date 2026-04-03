import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { SCAN_DATA } from "../constants";

export const ScanHistory = () => {
  const [data, setData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const update = () => {
      try {
        setData(JSON.parse(localStorage.getItem(SCAN_DATA) || "[]"));
      } catch {
        setData([]);
      }
    };

    window.addEventListener("storage", update);

    // in case navigator stays on page after scan
    update();

    return () => {
      window.removeEventListener("storage", update);
    };
  }, []);

  return (
    <div>
      {data.length === 0 && <p>История сканирования пуста.</p>}
      {data.map((text, idx) => (
        <p key={`${text}-${idx}`}>
          {text}
          <QRCodeSVG value={text} size={100} />
        </p>
      ))}
    </div>
  );
};
