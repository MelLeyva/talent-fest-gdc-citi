import React from 'react'
// import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const Services = () => {
    return (
        <>
        <section className='lateral-btns-home-container'>
                <button><i className="bi bi-credit-card"/>Trasferencias</button>
                <button><i className="bi bi-file-earmark-text"/>Alstas de cuentas</button>
                <button><i className="bi bi-bell"/>Comprobantes</button>
        </section>
        {/* <SideBar /> */}
        <Outlet />
        </>

    )
}

export default Services
