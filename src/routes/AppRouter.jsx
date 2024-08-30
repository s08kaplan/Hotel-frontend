import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/HOME/Home";
import Loading from "../components/LOADING/Loading";

const Login = lazy(() => import("../pages/LOGIN/Login"));
const Register = lazy(() => import("../pages/REGISTER/Register"));
const Booking = lazy(() => import("../pages/BOOKING/Booking"));
const About = lazy(() => import("../pages/ABOUT/About"));
const AboutDetails = lazy(() => import("../pages/ABOUT-DETAILS/AboutDetails"));
const Contact = lazy(() => import("../pages/CONTACT/Contact"));
const Rooms = lazy(() => import("../pages/ROOMS/Rooms"));
const NotFound = lazy(() => import("../pages/404/NotFound"));

const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="booking" element={<PrivateRouter />}>
          <Route path="" element={<Booking />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="about-details/:id" element={<AboutDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
