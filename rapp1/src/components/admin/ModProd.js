import { productsData } from "../../Data/ProductsData";
import "../../styles/style.css"
import { useState } from "react";

export const ModProd = () =>{
    const [id, setId] = useState(1);
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
                                    <div key={key} >
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
                <div className="col">
                    <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" placeholder={productsData[id].nombre}/>
                    </div>
                    <div class="mb-3">
                    <label for="descripcion" class="form-label">Descripción</label>
                    <input type="text" class="form-control" id="descripcion" placeholder={productsData[id].descripcion}/>
                    </div>
                    <div class="mb-3">
                    <label for="precio" class="form-label">precio</label>
                    <input type="number" class="form-control" id="precio" placeholder={productsData[id].precio}/>
                    </div>
                    <div class="mb-3">
                    <label for="stock" class="form-label">Stock</label>
                    <input type="number" class="form-control" id="stock" placeholder={productsData[id].stock}/>
                    </div>
                    <button>Guardar cambios</button>
                </div>       
            </div>
        </div>
    )
}



const Producto = ({nombre, id}) => {
    return (
        <a className="list-group-item">{nombre} {/* onClick={HandleClick({id})} */} </a>
    )
}