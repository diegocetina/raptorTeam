import raptor from "../raptor.png";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <img src={raptor} alt="logo"></img>
      <h1>Bienvenido a la app de raptorTeam</h1>
      <h2>Escoja su rol</h2>
      <nav>
        <Link to="/admin" classNAme="navbar-brand">
          Administrador
        </Link>
      </nav>
      <nav>
        <Link to="/client" classNAme="navbar-brand">
          Cliente
        </Link>
      </nav>
    </div>
  );
};
