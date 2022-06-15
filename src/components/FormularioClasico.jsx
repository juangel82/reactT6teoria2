import React, { useState } from 'react';

export default function Formulario() {
     // cada elemento del formulario tiene su variable donde guarda el valor
    const [nombre, setNombre] = useState('');  // la misma variable se usará en el atributo name del elemento
    const [descripcion, setDescripcion] = useState(''); //asi podremos difenciar con un switch case en el metodo que maneja los cambios
    const [localidad, setLocalidad] = useState(''); // de esta manera evitamos crear un método manejar por cada elemento.

    let manejarCambios = (event) => {
        const name = event.target.name;
        const value = event.target.value;
      
        switch(name) {
          case 'nombre': setNombre(value); break;
          case 'descripcion': setDescripcion(value); break;
          case 'localidad': setLocalidad(value); break;
          default: break;
        }
      };
   	
let manejarEnvio = (event) => {
    event.preventDefault();
   
    console.log("%cDatos del formulario 📑", "color: green")
    console.log(`Nombre: ${nombre}`);        
    console.log(`Descripción: ${descripcion}`); 
    console.log(`Localidad: ${localidad}`); 
  }

    return (
        <form onSubmit={manejarEnvio} className="Formulario">
        <strong>Mi formulario</strong>
      
        <input className="Elemento" placeholder="Introduce tu nombre..."
          type="text" name="nombre" onChange={manejarCambios} />
          
        <textarea className="Elemento" placeholder="Introduce tu descripción..."
          name="descripcion" onChange={manejarCambios} />
          
        <select className="Elemento" name="localidad" onChange={manejarCambios}>
          <option value="Málaga">Málaga</option>
          <option value="Granada">Granada</option>
          <option value="Sevilla">Sevilla</option>
        </select>	
      
        <button className="Elemento"  type="submit">Enviar</button>
      </form>
    );
}