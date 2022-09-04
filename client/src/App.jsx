
import './App.css';
import {Home} from "./pages/Home"
import {Login} from "./pages/Login"
import {Register} from "./pages/Register"
import {Car} from "./pages/Car"
import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="app">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/car" element={<Car/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
