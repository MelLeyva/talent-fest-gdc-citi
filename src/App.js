import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home";
import "./Scss/Layout/home.scss";
import { HeaderNav } from "./components/HeaderNav";
import Footer from "./components/Footer";
import "./Scss/Layout/footer.scss";
import "./Scss/Layout/sidebar.scss";
import "./Scss/Layout/HeaderNav.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import { Altas } from "./components/Altas";

function App() {
  return (
    <>
      <HeaderNav />
      <Router>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="trans-pay/*" element={<Services />}>
            <Route  path="altas" element={<Altas />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
/*
    <SideBar/>

*/
