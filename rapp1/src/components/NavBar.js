import "./client/Navbar.css";
import { Link, Outlet } from "react-router-dom";


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
      <nav className="navbar">
        <Link to="/home" className="navbar-logo">
          RaptorTeam App
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="lista" className="cart_link">
              <span>Lista de productos</span>
            </Link>
          </li>
          <li className="navbar-links">
            <Link to="modificar" className="cart_link">
              Modificar producto
            </Link>
          </li>
          <li className="navbar-links">
            <Link to="ventas" className="cart_link">
              Ventas
            </Link>
          </li>
        </ul>
      </nav>
      ,
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export const ClientPageHeader = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/home" className="navbar-logo">
          RaptorTeam App
        </Link>
        <ul className="navbar-links">
          <li >
            <Link to="productos" className="cart_link">
              Lista de productos
            </Link>
          </li>
          <li >
            <Link to="carrito" className="cart_link">
              Carrito
              <span className="cart-itemcount">0</span>
            </Link>
          </li>
        </ul>
      </nav>
      ,
      <div>
        <Outlet />
      </div>
    </div>
  );
};
