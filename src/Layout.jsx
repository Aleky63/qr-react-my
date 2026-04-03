import { Routes, Route } from "react-router-dom";
import { Navig } from "./components/Navig/Navig";
import { QrCode } from "./components/QrCode/QrCode";
import { QrScanner } from "./components/QrScanner/QrScanner";
import { GenerateHistory } from "./components/GenerateHistory";
import { ScanHistory } from "./components/ScanHistory";

const Layout = () => {
  return (
    <div>
      <Navig />
      {/* <QrCode /> */}

      {/* <QrScanner /> */}

      <Routes>
        <Route path="/qr-code/generate" element={<QrCode />} />
        <Route path="/qr-code/scan" element={<QrScanner />} />
        <Route path="/qr-code/scanHistory" element={<ScanHistory />} />
        <Route path="/qr-code/generateHistory" element={<GenerateHistory />} />
      </Routes>
    </div>
  );
};

export { Layout };
