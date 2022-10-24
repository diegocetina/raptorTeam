import { productsData } from "../../Data/ProductsData";
import "../../styles/style.css"
import { useState } from "react";

export const ModProd = () =>{
    const [id, setId] = useState(0);
    const HandleClick = (id) => {
        setId(id);
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
                                    <div key={key}>
                                    <Producto
                                        key={key}
                                        nombre={data.nombre}   
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
                       
            </div>
        </div>
    )
}



const Producto = ({nombre}) => {
    return (
        <li className="list-group-item">{nombre}</li>
    )
}