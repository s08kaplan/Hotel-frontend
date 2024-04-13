import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Booking from "../pages/Booking";
import About from "../pages/About/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Rooms from "../components/Rooms/Rooms";
import AboutDetails from "../pages/About-Details/AboutDetails";

const AppRouter = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="about" element={<About />} />
      <Route path="about-details/:id" element={<AboutDetails />} />
      <Route path="contact" element={<Contact />} />
      <Route path="rooms" element={<Rooms />} />
      <Route path="login" element={<Login />} />
     
    </Routes>
  );
};

export default AppRouter;
