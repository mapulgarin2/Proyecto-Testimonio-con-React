import React from 'react';
import '../style-sheet/Testimonio.css';
function Testimonio(props) {
    return(
        <div className='contenedor-testimonio'>
            <img 
            className='imagen-testimonio'
            src={require(`../imagenes/testimonio-${props.imagen}.png`)}
            alt='Foto de Emma' /> 
            <div className='contenedor-texto-testimonio'> 
                <p className='nombre-testimonio'><strong>{props.nombre}</strong> in {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} at <strong>{props.empresa}</strong></p> 
                <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>            
        </div>
    );
 }
//  SIN PROPS
// -----------------------------------------------------------------------
// function Testimonio() {
//     return(
//         <div className='contenedor-testimonio'>
//             <img 
//             className='imagen-testimonio'
//             src={require('../imagenes/testimonio-Emma.png')}
//             alt='Foto de Emma'/> 
//             <div className='contenedor-texto-testimonio'> 
//                 <p className='nombre-testimonio'><strong>Emma Bostian in Sweden
// </strong></p>
//                 <p className='cargo-testimonio'>Software Engineer at Spotify</p> 
//                 <p className='texto-testimonio'>"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."</p>
//             </div>            
//         </div>
//     );
//  }

export default Testimonio;//Exportacion por defecto
