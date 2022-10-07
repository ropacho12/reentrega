 import React from 'react'
import { useContext } from 'react'
import CartContext from '../../Context/ContextNew'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/ContextNew'
import './CartWidget.css';

const CartWidget = () => {
const {cantidadCarrito} = useContext (CartContext);
const {finalProductos} =useCartContext ();


const totalFinal = cantidadCarrito()



 
  return (<>
  <Link to="/Cart">
      <img className='ImgCart' src='imagenes/cart.png' alt='logo'/> 
      {totalFinal}
    </Link>

    <span>{finalProductos() || '' } </span>
  
  </>
    
  )
}

export default CartWidget