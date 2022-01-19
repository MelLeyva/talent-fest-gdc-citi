import React from 'react';
import { Link } from 'react-router-dom'


const DataRegister = () => {
  return <div> <div className ="transferButtons">
  <button type="button" className="continue"> Continuar </button>
  <button type="button" className="cancel"><Link to="Services">Cancelar</Link></button>
  </div></div>;
};

export default DataRegister;
