import { createContext, useContext, useEffect, useState } from "react";
import { productsData } from "../../Data/ProductsData";
import "../admin/ProdStyles.css";
import "./ListaStyle.css";

export const List = () => {
  /* const addCart= (producto) => {
    const enCarrito =carritoProd.find((prodEnCarrito) => prodEnCarrito.id=== producto.id);
    if(enCarrito){
      setCarritoProd(
        carritoProd.map((prodEnCarrito)=> {
          if(prodEnCarrito.id=== producto.id){
            return {...enCarrito, stock: enCarrito.stock +1}
          } else return prodEnCarrito;
        })
      );
  }else{
    setCarritoProd([...enCarrito, {...producto, stock:1}]);
  }
};
  const borrarItem = (producto) =>{
    const enCarrito =carritoProd.find((prodEnCarrito) => prodEnCarrito.id=== producto.id);
    if(enCarrito.stock === 1){
      setCarritoProd(
        carritoProd.filter(prodEnCarrito =>prodEnCarrito.id !== producto.id)
      )
    } else {
      setCarritoProd((prodEnCarrito)=>{
        if(prodEnCarrito.id===producto.id){
          return {...enCarrito, stock: enCarrito.stock - 1}
        } else return prodEnCarrito;
      }) 
    }
  }; */
  return (
    <div className="stock-container">
      {productsData.map((data, key) => {
        return (
          <div key={key}>
            <Producto
              key={key}
              img={data.imagenURL}
              nombre={data.nombre}
              descripcion={data.descripcion}
              precio={data.precio}
              stock={data.stock}
            />
            <div className="container">              
              <div >
                cantidad
                <select>
                  <option value="1">0</option>
                </select>
              </div>
              <button className="boton" /* onClick={()=>addCart(data)} */>
                Añadir a carrito
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Producto = ({ nombre, descripcion, precio, stock, img }) => {
  return (
    <div className="product">
      <img src={img} className="img" alt="not found" />
      <p>{nombre}</p>
      <p className="descripcion">{descripcion}</p>
      <p className="precio">Precio: ${precio}</p>
      <p>Unidades en stock: {stock}</p>
    </div>
  );
};
