import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Dashbord from "./pages/Dashbord"
import Signin from "./pages/Signin"
import Signup from "./pages/SignUp"

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home />}></Route>
     <Route path="/about" element={<About />}></Route>
     <Route path="/sign-in" element={<Signin />}></Route>
     <Route path="/sign-up" element={<Signup />}></Route>
     <Route path="/projects" element={<Projects />}></Route>
     <Route path="/dashbord" element={<Dashbord />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
