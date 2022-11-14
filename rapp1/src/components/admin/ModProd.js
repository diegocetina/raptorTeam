import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as ListProducts } from "../../redux/actions/ProductsActions";
import "../../styles/style.css";

export const ModProd = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(ListProducts());
  }, [dispatch]);

  const [id, setId] = useState("636290d03aaf816db603d5e1");
  const Producto = ({ nombre }) => {
    return (
      <li
        onClick={() => {
          setId(id);
        }}
        className="list-group-item"
      >
        {nombre}
      </li>
    );
  };
  

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">Productos</div>
            <ul className="list-group list-group-flush">
              {loading ? (
                <h2>cargando datos...</h2>
              ) : error ? (
                <h2>{error}</h2>
              ) : (
                products.map((data, key) => {
                  return (
                    <div key={key}>
                      <Producto key={data._id} nombre={data.nombre} />
                    </div>
                  );
                })
              )}
            </ul>
          </div>
          ,
        </div>
        <div className="col">
          <div className="card">
            <img href={products._id} src={products[id].imagenURL} className="img" alt="no carga" />
            <div className="card-body">
              <h5 className="card-title" href={products._id}>{products[id].nombre}</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              placeholder={products.nombre}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">
              Descripción
            </label>
            <input
              type="text"
              className="form-control"
              id="descripcion"
              placeholder={products.descripcion}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="precio" className="form-label">
              precio
            </label>
            <input
              type="number"
              className="form-control"
              id="precio"
              placeholder={products.precio}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="stock" className="form-label">
              Stock
            </label>
            <input
              type="number"
              className="form-control"
              id="stock"
              placeholder={products.stock}
            />
          </div>
          <button /* onClick={modItems} */>Guardar cambios</button>
        </div>
      </div>
    </div>
  );
};
