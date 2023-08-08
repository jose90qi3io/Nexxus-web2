import React from 'react'
import'../Styles/Styles.css'
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='stylesGeneral'>
      <div className='navBar'>
        <div className="navBarcontent">
            <div className="navBartitulo">
                <p>Nexxus</p>
            </div>
            <div className="navBatpaginas">
                <ul>
                    <li><a href={`/`}>Inicio</a></li>
                    <li><a href={`/Conocenos`}>Conocenos</a></li>
                    <li><a href="/">Productos</a></li>
                    <li><a href="/">Contactanos</a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
