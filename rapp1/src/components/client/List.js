import { productsData } from "../../Data/ProductsData";
import "../../styles/style.css";

export const List = () => {
  return (
      <div className="card">
        <ul className="list-group list-group-flush">
          {productsData.map((data, key) => {
            return (
              <div  key={key}>
                <Producto
                  key={key}
                  img={data.img}
                  nombre={data.nombre}
                  descripcion={data.descripcion}
                  precio={data.precio}
                  stock={data.stock}
                  
                />
                <button>Añadir a carrito</button>
              </div>
              
            );
          })}
        </ul>
        
      </div>
  );
};

const Producto = ({ nombre, descripcion, precio, stock, img }) => {
  return (
    <div className="row">
      <img src={img} className="list-group-item" alt="not found" />
      <li className="list-group-item">{nombre}</li>
      <li className="list-group-item">{descripcion}</li>
      <li className="list-group-item">{precio}</li>
      <li className="list-group-item">{stock}</li>
    </div>
  );
};
