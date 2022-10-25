import { productsData } from "../../Data/ProductsData";
import "../../styles/style.css"
import { useState } from "react";

export const ModProd = () =>{
    const [id, setId] = useState(2);
    console.log(id);
    const Producto = ({id, nombre}) => {
        return (

            <li onClick={()=>{setId(id)}} className="list-group-item">{nombre} </li>
        )
        
  /*   const[productsData, setProductsData] = useState([]);
    const modItems = ()=>{
        setProductsData([ ...items{
            nombre:
        } */

        
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="card" >
                        <div className="card-header">
                            Productos
                        </div>
                        <ul className="list-group list-group-flush" >
                            {productsData.map((data, key) => {
                                return (
                                    <div key={key} >
                                    <Producto
                                        key={key}
                                        nombre={data.nombre} 
                                        id={data.id} 
                                    />
                                    
                                    </div>
                                    );
                            })}
                        </ul>
                    </div>,
                </div>
                <div className="col">
                    <div className="card" >
                        <img src={productsData[id].img} className="card-img-top" alt="no carga"/>
                        <div className="card-body">
                            <h5 className="card-title">{productsData[id].nombre}</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder={productsData[id].nombre}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <input type="text" className="form-control" id="descripcion" placeholder={productsData[id].descripcion}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="precio" className="form-label">precio</label>
                    <input type="number" className="form-control" id="precio" placeholder={productsData[id].precio}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="stock" className="form-label">Stock</label>
                    <input type="number" className="form-control" id="stock" placeholder={productsData[id].stock}/>
                    </div>
                    <button>Guardar cambios</button>
                </div>       
            </div>
        </div>
    )
}


