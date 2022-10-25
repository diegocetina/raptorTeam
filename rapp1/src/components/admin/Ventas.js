import "../../styles/style.css";
import { listVentas } from "../../Data/VentasData.js";


export const Ventas = () => {
  return (
    <>
      
      <div className="tabla-ventas">
        <TabHeader />
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
        
        <TabFooter/>
        
      </div>
    </>
  );
};

const TabHeader = () => {
  return (
    <thead class="thead-dark">
      <tr>
        <th>Fecha</th>
        <th>idVenta</th>
        <th>Valor</th>
      </tr>
    </thead>
  );
};

const Venta = ({ fecha, idVenta, valor }) => {
  if (!fecha) return <div />;
  return (
    <tbody class="table table-bordered">
      <tr>
        <td>{fecha}</td>
        <td>{idVenta}</td>
        <td>{valor}</td>
      </tr>
    </tbody>
  );
};

const TabFooter = () => {
  return(
    <tfoot>
      <td></td>
      <td>Total</td>
      <td>{Object.values(listVentas).map((data)=> data.valor).reduce((a, b) => parseFloat(a) + parseFloat(b), 0)}</td>
    </tfoot>
  )
}
