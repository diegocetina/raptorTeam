import raptor from "../raptor.png";
import { Link } from "react-router-dom";
import './homeStyle.css';
export const Home = () => {
  return (
    <div>
    <nav className="navigationBar">
      <bars>
        <navMenu>
        <Link to="/admin" className="navbar-brand">
          Administrador
        </Link>
        <Link to="/client" className="navbar-brand">
          Cliente
        </Link>
        </navMenu>
      </bars>
    </nav>
    <div>
      <h1 className="titulo">Bienvenido a la app de raptorTeam</h1>
      <h2>Escoja su rol</h2>
    </div>
    </div>


    
  );
};


/* <div>
<img src={raptor} alt="logo"></img>
<h1>Bienvenido a la app de raptorTeam</h1>
<h2>Escoja su rol</h2>
  <nav>
    <Link to="/admin" className="navbar-brand">
      Administrador
    </Link>
  </nav>
  <nav>
    <Link to="/client" className="navbar-brand">
      Cliente
    </Link>
  </nav>
</div> */