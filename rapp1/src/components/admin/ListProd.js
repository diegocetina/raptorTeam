import { productsData } from "../../Data/ProductsData";
import "../../styles/style.css";

export const ListProd = () => {
  return (
      <div className="card">
        
        <ul className="list-group list-group-flush">
          {productsData.map((data, key) => {
            return (
              <div className="col" key={key}>
                <Producto
                  key={key}
                  img={data.img}
                  nombre={data.nombre}
                  descripcion={data.descripcion}
                  precio={data.precio}
                  stock={data.stock}
                />
              </div>
            );
          })}
        </ul>
        <button>Añadir producto</button>
      </div>
  );
};

const Producto = ({ nombre, descripcion, precio, stock, img }) => {
  return (
    <div className="col">
      <img src={img} className="card-img-top" alt="not found" />
      <li className="list-group-item">{nombre}</li>
      <li className="list-group-item">{descripcion}</li>
      <li className="list-group-item">{precio}</li>
      <li className="list-group-item">{stock}</li>
    </div>
  );
};
