import AppRouter from "./routes/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NAVBAR/Navbar";
import Footer from "./components/FOOTER/Footer";
// import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;
