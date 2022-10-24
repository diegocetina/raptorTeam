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
    <thead class="thead-dark">
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

const Venta = ({ img, cantidad, producto, valor }) => {
  if (!img) return <div />;
  return (
    <tbody class="table table-bordered">
      <tr>
        <td><img src={img} class="card-img-top" alt="no image"></img></td>
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
      <td>{Object.values(carritoData).map((data)=> data.valor).reduce((a, b) => a + parseFloat(b), 0)}</td>
    </tfoot>
  )
}
