import "../styles/style.css";
import { Link, Outlet } from "react-router-dom";
import { Ventas } from "./admin/Ventas";

export const HomePageHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <nav>
          <Link to="/home" className="navbar-brand">
            RaptorTeam App
          </Link>
        </nav>
      </div>
      
    </nav>
    
  );
};

export const AdminPageHeader = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <nav>
          <Link to="/home" className="navbar-brand">
            RaptorTeam App
          </Link>
        </nav>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <nav>
                <Link to="lista" className="nav-link active">
                  Lista de productos
                </Link>
              </nav>
            </li>
            <li className="nav-item">
              <nav>
                <Link to="modificar" className="nav-link active">
                  Modificar producto
                </Link>
              </nav>
            </li>
            <li className="nav-item">
              <nav>
                <Link to="ventas" element={<Ventas/>} className="nav-link active">
                  Ventas
                </Link>
                
              </nav>
            </li>
          </ul>
        </div>
      </div>  
    </nav>,
    <div><Outlet /></div>
    </div>
  );
};

export const ClientPageHeader = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <nav>
          <Link to="/home" className="navbar-brand">
            RaptorTeam App
          </Link>
        </nav>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <nav>
                <Link to="productos" className="nav-link active">
                  Lista de productos
                </Link>
              </nav>
            </li>
            <li className="nav-item">
              <nav>
                <Link to="carrito" className="nav-link active">
                  Carrito
                </Link>
              </nav>
            </li>
          </ul>
        </div>
      </div>  
    </nav>,
    <div><Outlet /></div>
    </div>
  );
};