import React from 'react';
import { Link } from 'react-router-dom'

const DataTranfer = () => {
  return <div>
      <p>Ingreso de datos para trasnferencias</p>
      <div className ="transferButtons">
        <button type="button" className="continue"><Link to="Altas"> Continuar </Link></button>
        <button type="button" className="cancel"><Link to="Services">Cancelar</Link></button>
        </div>
  </div>;
};

export default DataTranfer;
