import "../styles/app.css";
import { listVentas } from "../Data/VentasData.js";
export const Ventas = () => {
  return (
    <>
      <HomePageHeader />
      <div className="tabla-ventas">
      <TabHeader/>
        {listVentas.map((data, key) => {
          return (
            <div key={key}>
                
              <Venta
                key={key}
                fecha={data.fecha}
                idVenta={data.idVenta}
                valor={data.valor}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Lista ventas</h2>
    </header>
  );
};

const TabHeader = () =>{
    return(
    <thead>
    <tr>
        <td>Fecha</td>
        <td>idVenta</td>
        <td>Valor</td>
    </tr>
    </thead>
    );
}

const Venta = ({ fecha, idVenta, valor }) => {
  if (!fecha) return <div />;
  return (
      <tbody> 
        <tr>
          <td>{fecha}</td>
          <td>{idVenta}</td>
          <td>{valor}</td>
        </tr>
      </tbody>
  );
};
