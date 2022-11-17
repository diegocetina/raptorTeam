import avion from "../avion.png";
import { Link } from "react-router-dom";
import './homeStyle.css';


export const Home = () => {
  return (
    <div>
      <nav className="nav">
        <a href="./home" className="site-title">RAPTOR TEAM</a>
        <ul>
          <li>
            <a href="./admin">ADMINISTRADOR</a>
          </li>
          <li>
            <a href="./client">CLIENTE</a>
          </li>
        </ul>
      </nav>
      <img className="logo" src={avion} alt="logo"></img>
      <h1>BIENDENIDO A LA APP DE RAPTOR TEAM</h1>
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