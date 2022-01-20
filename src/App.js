import OwnAccount from "./components/Forms/Tranferences/OwnAccount";
import ThirdAccount from "./components/Forms/Tranferences/ThirdAccount";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home";
import "./Scss/Layout/home.scss";
import { HeaderNav } from "./components/HeaderNav";
import Footer from "./components/Footer";
import DataRegister from "./components/Forms/Register/DataRegister";
import "./Scss/Layout/footer.scss";
import "./Scss/Layout/sidebar.scss";
import "./Scss/Layout/HeaderNav.scss";
import Services from "./pages/Services";
import AccountRegister from "./components/Forms/Register/AccountRegister"
import Transfers from "./components/Forms/Tranferences/Transfers";

function App() {
  return (
    <>
      <Router>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="services/transfers" element={<Transfers />} />
            <Route path="services/own-account" element={<OwnAccount />} />
            <Route path="services/register" element={<DataRegister />} />
            <Route path="services/formRegister" element={<AccountRegister />} />
            <Route path="services/third-account" element={<ThirdAccount />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
