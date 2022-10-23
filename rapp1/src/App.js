import { BrowserRouter, Route, Routes} from "react-router-dom"
import './styles/style.css';
import { HomePageHeader } from "./components/NavBar";
import { Ventas } from "./components/Ventas";
import { ModProd } from "./components/ModProd";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomePageHeader/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/ventas" element={<Ventas/>}></Route>
          <Route path="/Modificar" element={<ModProd/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
