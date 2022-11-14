import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as ListProducts } from "../../redux/actions/ProductsActions";
import { useNavigate} from "react-router"
import "./ProdStyles.css";

export const ListProd = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  useEffect(() => {
    dispatch(ListProducts());
  }, [dispatch]);

  const { productos, setProductos}=useState({
      nombre: "",
      descripcion: "",
      precio: "",
      stock: ""
  });
  const navigate = useNavigate();
   
  function addProd(value){
    return setProductos((prev) =>{
      return {...prev, ...value};
    });
  }

  async function handleChange(e) {
    e.preventDefault();
    const newProd = {...productos};
    await fetch("https://localhost:5000/api/ListaProductos", {
      method: "POST",
      headers: {
        "Content-type":"application/json"
      },
      body: JSON.stringify(newProd),
    })
    .catch(error =>{
      console.log(error);
    });

    setProductos({
      nombre: "",
      descripcion: "",
      precio: "",
      stock: ""
    });
    navigate("/");
  }
  console.log(products);

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
      <div className="form">
        <h1>Formulario para añadir productos</h1>
        <form  onSubmit={addProd} method="POST">
          <div>
            <input
              type="text"
              name="nombre"
              placeholder="nombre de producto"
              onChange={(e) => handleChange({nombre:e.target.value})}
              value={products.nombre}
            ></input>
          </div>
          <div>
            <textarea
              type="text"
              name="descripcion"
              placeholder="descripción de producto"
              onChange={(e) => handleChange({nombre:e.target.value})}
              value={products.descripcion}
            ></textarea>
          </div>
          <div>
            <input
              type="number"
              name="precio"
              placeholder="precio de producto"
              onChange={(e) => handleChange({nombre:e.target.value})}
              value={products.precio}
            ></input>
          </div>
          <div>
            <input
              type="number"
              name="stock"
              placeholder="stock de producto"
              onChange={(e) => handleChange({nombre:e.target.value})}
              value={products.stock}
            ></input>
          </div>
          <button type="submit">Añadir producto</button>
        </form>
      </div>
    </div>
  );
};

const Producto = ({ nombre, descripcion, precio, stock, imagenURL }) => {
  return (
    <div>
      <img src={imagenURL} className="img" alt="not found" />
      <p>{nombre}</p>
      <p className="descripcion">{descripcion}</p>
      <p className="precio">Precio: $ {precio}</p>
      <p>Unidades en stock: {stock}</p>
    </div>
  );
};
