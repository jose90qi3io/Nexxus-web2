import React from 'react'
import Navbar from '../Components/Navbar'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import LOGO from '../img/LOGO.png'
import '../Styles/About.css'
const About = () => {
  return (
    <div className='stylesGeneral'>
      <Navbar/>
      <div className="encabezado">
        <div className="encabezadoPortada">
          <div className="encabezaPortadaTitulos">
            <div className="encabezaPortadaTitulo">
              <p>Nosotros</p>
              <hr />
            </div>
            <div className="encabezaPortadaSubtitulo">
              <p>
              En Nexxus, somos líderes en soluciones ERP empresariales, comprometidos con optimizar y simplificar tus procesos de negocio. Nuestro equipo experto personaliza cada sistema para satisfacer las necesidades únicas de cada cliente. Ya sea una PYME o una gran corporación, contamos con la experiencia y pasión necesarias para elevar tu gestión empresarial. En SysERP, no solo somos proveedores; somos tus socios estratégicos. Descubre la diferencia SysERP.
              </p>
            </div>
 

            <div className="encabezaPortadaPie">
              <div className="encabezaPortadaPieIconos">
                <img src="" alt="" />
                <p>Eficiencia y Protección.</p>
              </div>
              <div className="encabezaPortadaPieIconos">
                <img src="" alt="" />
                <p>Adaptabilidad y Alcance.</p>
              </div>
              <div className="encabezaPortadaPieIconos">
                <img src="" alt="" />
                <p>Trabajo Unificado.</p>
              </div>
            </div>
            
          </div>
                 <img src={LOGO} alt="" />        
        </div>
      </div>



    </div>
  )
}

export default About
