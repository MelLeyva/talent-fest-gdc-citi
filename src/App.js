import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home";
import "./Scss/Layout/home.scss";
import { HeaderNav } from "./components/HeaderNav";
import Footer from "./components/Footer";

import "./Scss/Layout/footer.scss";
import "./Scss/Layout/sidebar.scss";
import "./Scss/Layout/HeaderNav.scss";
import Services from "./pages/Services";
import DataRegister from './components/Forms/registration.js/DataRegister'

function App() {
  return (
    <>
      <Router>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Services/*" element={<Services />}>
            <Route path="Register" element={<DataRegister />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
/*
    <SideBar/>

*/
