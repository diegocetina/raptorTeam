import "../styles/style.css";
import { Link } from "react-router-dom";

export const HomePageHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <h1 className="navbar-brand">RaptorTeam app</h1>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <nav>
                <Link to="/listProd" class="nav-link active">Lista de productos</Link>
              </nav>
            </li>
            <li className="nav-item">
              <nav>
                <Link to="/modificar" class="nav-link active">Modificar producto</Link>
              </nav>
            </li>
            <li className="nav-item">
              <nav>
                <Link to="/ventas" class="nav-link active">Ventas</Link>
              </nav>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
