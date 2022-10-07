import React, { Fragment ,useState } from 'react'

const Formulario = () => {
  const [datos, setDatos] = useState ({
    Nombre:"",
    Apellido:""
  })
  const handleInputChange = (event) =>{
    console.log (event.target.value)
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
  }
const enviarDatos =(event)=>{
    event.preventDeault();
    console.log(datos.Nombre + '' + datos.Apellido)
}


  return (
    <Fragment>
        <h1>Formulario de compra</h1>
        <form onSubmit={enviarDatos}>
            <div>
                <input 
                   placeholder= "ingrese nombre"
                   type="text"
                   name="Nombre"
                   onChange={handleInputChange}
                ></input>
            </div>
            <div>
                <input 
                   placeholder= "ingrese Apellido"
                   type="text"
                   name="Apellido"
                   onChange={handleInputChange}
                ></input>
            </div>
            <div>
                <button type='submit'>Enviar</button>
            </div>
        </form>
        




    </Fragment>
  )
}

export default Formulario