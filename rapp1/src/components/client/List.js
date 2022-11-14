
import { useSelector, useDispatch } from "react-redux";
import { usesState, useEffect } from "react";
import { addToCart} from "../../redux/actions/CartActions"
import "../admin/ProdStyles.css";
import "./ListaStyle.css";
import axios from "axios";
import { getProducts as ListProducts } from "../../redux/actions/ProductsActions";

export const List = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(ListProducts());
  }, [dispatch]);

  const handleCart=()=>{

  }
  const Producto = ({ nombre, descripcion, precio, stock, imagenURL }) => {
    return (
      <div>
        <img src={imagenURL} className="img" alt="not found" />
        <p>{nombre}</p>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">Precio: $ {precio}</p>
        <p>Unidades en stock: {stock}</p>
        <button onClick={handleCart}>Añadir a carrito</button>
        <select>{stock}</select>
      </div>
    );
  };
  return (
    <div>
      <h1>Lista de productos disponibles</h1>
      <div className="stock-container">
        {loading ? (
          <h2>cargando datos...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((data, key) => {
            return (
              <div className="product" key={key}>
                <Producto
                  key={data._id}
                  imagenURL={data.imagenURL}
                  nombre={data.nombre}
                  descripcion={data.descripcion}
                  precio={data.precio}
                  stock={data.stock}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};


