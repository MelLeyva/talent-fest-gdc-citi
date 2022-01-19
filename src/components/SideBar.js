import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <>
          <h1 className ="entry-question"> ¿Qué deseas hacer?</h1>
        <hr />
        <section className="menu">
      
     {/*    <div className= "col-3 border-sm"> */}
            <div className="container d-flex"> 

            <ul className="navbar-nav w-70"> {/* "nav nav-pills nav-fill" */}
            <li className ="nav-item"><Link to="/Services"><p className="nav-link active">Transferir o pagar</p></Link></li>
            <hr />
            <li className ="nav-item"><Link to="Register"><p className="nav-link active">Dar de alta cuenta, tarjeta, servivio, otros</p></Link></li>
            <hr />
            <li className ="nav-item"><a className="nav-link disabled" href="#">Modificar altas</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link disabled" href="#">Pagar impuestos</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link active dropdown-toggle" href="#">Comprobantes</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link disabled" href="#">CDMX</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link disabled" href="#">Comprobante electrónico de pago interbancario(CEP)</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link disabled" href="#">Ver movimientos de BancaNet</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link disabled" href="#">Domiciliar un pago</a></li>
            </ul>
            </div> 
      {/*   </div> */}
        
        </section>
        </>
    )
}

export default SideBar
