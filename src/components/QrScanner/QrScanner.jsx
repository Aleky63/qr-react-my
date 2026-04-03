import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import s from "./QrScanner.module.css";
import { SCAN_DATA } from "../../constants";

export const QrScanner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    if (!Array.isArray(result) || result.length === 0) {
      return;
    }

    const value = result[0]?.rawValue;
    if (!value) {
      return;
    }

    setScanned(value);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
    const nextData = [...prevData, value];

    localStorage.setItem(SCAN_DATA, JSON.stringify(nextData));
  };

  return (
    <div className={s.container}>
      <p>{scanned}</p>
      <Scanner
        onScan={scanHandler}
        // eslint-disable-next-line no-undef
        components={settings}
        styles={{ container: { width: 200 } }}
      />
    </div>
  );
};
