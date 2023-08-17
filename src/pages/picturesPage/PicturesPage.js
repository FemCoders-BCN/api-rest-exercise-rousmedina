import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import PictureObject from '../../components/pictureObject/PictureObject'
import { LoremPicsumService } from '../../services/LoremPicsumService';

function PicturesPage() {
  const loremPicsum = LoremPicsumService ();
  const [pinture, setPicture] = useState([])
  useEffect(() => {
    (loremPicsum.getAll()
    .then(response=>{setPicture(response.data)}
    ))
    },[]);

    console.log(pinture)
  return (
    <main>
        <h2>Aquí estarán todos los objetos de la primera llamada</h2>
        <Navbar/>
        <div>
          {pinture.map((image,index) =>(<PictureObject image={image}/>))} 
        </div>
        <ul>
            <p>INSTRUCCIONES</p>
            <li>Crea los componentes que necesites para imprimir una lista o tarjetas que contengan lo siguiente (deberán estar todos los objetos de la llamada a la API):</li>
            <ol>
                <li>El id de la imagen.</li>
                <li>Su autor.</li>
                <li>La fotografía (queremos ver la imagen en nuestra app, no queremos la url).</li>
            </ol>
            <li>Has de borrar estas instrucciones cuando lo tengas.</li>
            <li>Los estilos los has de realizar tú misma.</li>
        </ul>
        
    </main>
  )
}

export default PicturesPage