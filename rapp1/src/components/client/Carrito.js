import "../../styles/style.css";
import { carritoData } from "../../Data/CarritoData.js";


export const Carrito = () => {
  
  return (
    <>
      
      <div className="tabla-ventas">
        <TabHeader />
        {carritoData.map((data, key) => {
          return (
            <div key={key}>
              <Venta
                key={key}
                img={data.img}
                cantidad={data.cantidad}
                producto={data.producto}
                valor={data.valor}
                
              />
             
            </div>
          );
        })}
        
        <TabFooter/>
        
      </div>
      <button>Finalizar compra</button>
    </>
  );
};

const TabHeader = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th>Imagen</th>
        <th>Cantidad</th>
        <th>Producto</th>
        <th>Valor</th>
        <th>Total</th>
      </tr>
    </thead>
  );
};



const Venta = ({ img, cantidad, producto, valor, total }) => {
  if (!img) return <div />;
  return (
    <tbody className="table table-bordered">
      <tr>
        <td><img src={img} className="card-img-top" alt="not found"></img></td>
        <td>{cantidad}</td>
        <td>{producto}</td>
        <td>{valor}</td>
        <td>{valor*cantidad}</td>
      </tr>
    </tbody>
  );
};

const TabFooter = () => {
  return(
    <tfoot>
      <td></td>
      <td></td>
      <td>Total</td>
      <td>{carritoData.length && carritoData.map((value) => value.cantidad*value.valor).reduce((a, b) => a + b, 0)}</td>
    </tfoot>
  )
}
