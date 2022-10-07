import { useState } from "react"

const Contador = ({stock, onAdd}) => {
  const [count, setCount] = useState(1)
  
  const menos = ()=> {
    if (count > 1){ 
       setCount (count - 1)
      }
    }
   const mas= ()=>{
    if (count < stock){
      setCount (count + 1)
    }
   }
  
return (
  <div >
      <div>
        <button onClick={menos}>-</button>
        <span>{count}</span>
        <button onClick={mas}>+</button>
        <button onClick={ () => onAdd (count)}>Agregar al carrito</button>
        
      </div>  
  </div>
)
}


export default Contador