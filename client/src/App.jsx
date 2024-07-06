import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Dashbord from "./pages/Dashbord"
import Signin from "./pages/Signin"
import Signup from "./pages/SignUp"
import Headers from "./components/Header"
import Footer from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute.jsx"

function App() {
  return (
    <BrowserRouter>
    <Headers/>
    <Routes>
     <Route path="/" element={<Home />}></Route>
     <Route path="/about" element={<About />}></Route>
     <Route path="/sign-in" element={<Signin />}></Route>
     <Route path="/sign-up" element={<Signup />}></Route>
     <Route element={<PrivateRoute />}>
     <Route path="/dashboard" element={<Dashbord />}></Route>
     </Route>
     <Route path="/projects" element={<Projects />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
