import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Cranial from "./Cranial";
import Spinal from "./Spinal";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Reminder from "./Reminder";
import Singleblog from "./Singleblog";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./Login";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ placed directly inside App */}
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/cranial" element={<Cranial />} />
          <Route path="/spinal" element={<Spinal />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/reminder"
            element={<PrivateRoute component={Reminder} />}
          />
          <Route path="/singleblog/:id" element={<Singleblog />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
