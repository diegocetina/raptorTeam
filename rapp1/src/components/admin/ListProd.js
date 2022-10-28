import { useEffect, useState } from "react";
import { productsData } from "../../Data/ProductsData";
import "../../styles/style.css";

export const ListProd = () => {
const[nuevoProd, setNuevoProd] = useState (productsData)
 
  const handleProd = (e)=>{
    setNuevoProd((producto)=>
    [...producto,{
      id:nuevoProd.length,
      nombre: e.target.value,
      descripcion:e.target.value,
      precio: e.target.value,
      stock:e.target.value
    }])
  alert("producto añadido")};
  
 
  console.log(nuevoProd)
  
  return (
    <div className="stock-container">
      {nuevoProd.map((data, key) => {
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

const Producto = ({ nombre, descripcion, precio, stock, img }) => {
  return (
    <div className="product">
      <img src={img} className="img" alt="not found" />
      <p>{nombre}</p>
      <p>{descripcion}</p>
      <p>{precio}</p>
      <p>{stock}</p>
    </div>
  );
};
