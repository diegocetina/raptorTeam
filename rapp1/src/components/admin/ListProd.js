import { useState, useEffect } from "react";
import { useSelector, useDispatch} from "react-redux"
import { productsData } from "../../Data/ProductsData";
import {getProducts as ListProducts} from "../../redux/actions/ProductsActions";
import "./ProdStyles.css";

export const ListProd = () => {
  const dispatch = useDispatch();
  const getProducts=useSelector(state => state.getProducts);
  const {products} = getProducts;

  useEffect(()=>{
    dispatch(ListProducts())
  },[dispatch]);
const[nuevoProd, setNuevoProd] = useState (productsData)
 
  const handleProd = (e)=>{
    setNuevoProd((producto)=>
    [...producto,{
      id:nuevoProd.length,
      imagenURL:e.target.value,
      nombre: e.target.value,
      descripcion:e.target.value,
      precio: e.target.value,
      stock:e.target.value
    }])
  alert("producto añadido")};
  
 
  console.log(products)
  
  return (
    <div className="stock-container">
      {products.map((data, key) => {
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
      })}
      <form onSubmit={handleProd}>
          <input
            type="text" name="nombre"  
            placeholder="nombre de producto" value={nuevoProd.nombre}>
          </input>
          <textarea
            type="text" name="descripcion"  
            placeholder="descripción de producto" value={nuevoProd.descripcion}>
          </textarea>
          <input
            type="number" name="precio"  
            placeholder="precio de producto" value={nuevoProd.precio}>
          </input>
          <input
            type="number" name="stock"  
            placeholder="stock de producto" value={nuevoProd.stock}>
          </input>
          <button type="submit">Añadir producto</button>
      </form>
      
    </div>
  );
};

const Producto = ({ nombre, descripcion, precio, stock, imagenURL }) => {
  return (
    <div >
      <img src={imagenURL} className="img" alt="not found" />
      <p>{nombre}</p>
      <p className="descripcion">{descripcion}</p>
      <p className="precio">Precio: $ {precio}</p>
      <p>Unidades en stock: {stock}</p>
    </div>
  );
};
