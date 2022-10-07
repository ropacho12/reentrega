import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import Contador from '../Contador/Contador'
import  CartContext   from '../../Context/ContextNew'
import {useCartContext} from '../../Context/ContextNew'
import './ItemDetail.css'





const ItemDetail = ({name, categoria, img, precio, id, data}) => {
  const [total, setTotal] = useState (0)
  console.log ( total)
  const {addCarrito, agregarItem} = useCartContext (CartContext)

  //const {agregarItem} = useContext (CartContext)
  

  const agregar = (total) =>{
    console.log ("agregaste al carrito")
   
    setTotal(total);
    
    addCarrito (data,total)

    const agregarProducto = {
      id, name, precio, total

    }
    agregarItem(agregarProducto)
  }



  
  return (

    <>
       <div className='card'>
       
             
                <img  className="card-img-top" src={img} alt={name} />
            


          <div className='card-body'>
              <h1>{name}</h1>
              <h2>{categoria}</h2>
              <h2>precio:{precio}</h2>
          </div>
         
        

        <div className='btn btn-primary'>
          {
            total === 0 ? (
              <Contador className='btn btn-primary' stock={10} onAdd ={agregar}/>
            ):(
              <Link to='/Cart'>Finalizar compra</Link>

            )

          }
        </div>
        </div>
    </>
    
  )
}

export default ItemDetail