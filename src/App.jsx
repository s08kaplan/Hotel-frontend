import AppRouter from "./routes/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NAVBAR/Navbar";
import Footer from "./components/FOOTER/Footer";
import Box from "@mui/material/Box";

function App() {
  return (
    <Router>
      <Box sx={{ display: "flex", flexDirection:"column", flexGrow: 1, minHeight:"100dvh" }}>
        <Navbar />
        <AppRouter />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
