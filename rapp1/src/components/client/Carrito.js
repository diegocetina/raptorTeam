import "../../styles/style.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom"


export const Carrito = (item) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  const {cartItems} = cart;

  const TabFooter = () => {
    return(
      <tfoot>
        <td></td>
        <td></td>
        <td>Total</td>
        <td>{cartItems.length && cartItems.map((value) => value.cantidad*value.valor).reduce((a, b) => a + b, 0)}</td>
      </tfoot>
    )
  }
  return (
    <>
      
      <div className="tabla-ventas">
        <TabHeader />
        {cartItems.length === 0 ? (
          <div>
            Nada en el carrito <Link to="/productos"> Volver a lista de productos</Link>
          </div>
        ) :cartItems.map((data, key) => {
          return (
            <div key={key}>
              <Venta
                key={key}
                img={data.imagenURL}
                cantidad={data.qty}
                producto={data.name}
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


