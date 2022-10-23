import { BrowserRouter, Route, Routes} from "react-router-dom"
import './styles/style.css';
import { AdminPageHeader, ClientPageHeader } from "./components/NavBar";
import { Ventas } from "./components/admin/Ventas";
import { ModProd } from "./components/admin/ModProd";
import { Home } from "./components/Home";
import { ListProd } from "./components/admin/ListProd"
import { List } from "./components/client/List"
import { Carrito } from "./components/client/Carrito"
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}></Route>
          <Route path="admin/*" element={<AdminPageHeader/>}> 
            <Route path="ventas" element={<Ventas/>}></Route>
            <Route path="modificar" element={<ModProd/>}></Route>
            <Route path="lista" element={<ListProd/>}></Route>
          </Route>
          <Route path="client/*" element={<ClientPageHeader/>}>
            <Route path="productos" element={<List/>}></Route>
            <Route path="carrito" element={<Carrito/>}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
