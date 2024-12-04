import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import s from "./QrScanner.module.css";
import { SCAN_DATA } from "../../constants";

export const QrScanner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    );
  };

  return (
    <div className={s.container}>
      <p>{scanned}</p>
      <Scanner
        onScan={scanHandler}
        components={settings}
        styles={{ container: { width: 200 } }}
      />
    </div>
  );
};
