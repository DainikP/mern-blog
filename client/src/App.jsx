import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Dashbord from "./pages/Dashbord";
import Signin from "./pages/Signin";
import Signup from "./pages/SignUp";
import Headers from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Headers />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashbord />} />
            </Route>
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
