import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Navig } from "./components/Navig/Navig";
import { QrCode } from "./components/QrCode/QrCode";
import { QrScanner } from "./components/QrScanner/QrScanner";
import { GenerateHistory } from "./components/GenerateHistory";
import { ScanHistory } from "./components/ScanHistory";
import logo from "./img/logo.png";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && (
        <div className="elfsight-header">
          <img src={logo} alt="Elfsight" className="elfsight-logo" />
        </div>
      )}
      
      <Navig />
      {/* <QrCode /> */}

      {/* <QrScanner /> */}

      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/qr-code/generate" element={<QrCode />} />
        <Route path="/qr-code/scan" element={<QrScanner />} />
        <Route path="/qr-code/scanHistory" element={<ScanHistory />} />
        <Route path="/qr-code/generateHistory" element={<GenerateHistory />} />
      </Routes>
    </>
  );
};

export { Layout };
