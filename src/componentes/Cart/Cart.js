import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/ContextNew'
 import ItemCart from '../ItemCart/ItemCart'
 import './Cart.css'

const Cart = () => {
 const {carrito, finalProductos} = useCartContext();
 const compra= finalProductos ()
  // const total = finalCompra()
 

 if (compra.length === 0){
       return(
        <>
        <p>No hay elementos en el carrito</p>
        <Link to='/Cart'> hacer las compras</Link>
        
        </>

       );
 }

  return (
    <>
    <div  className='carta'>
       {
         carrito.map(product => <ItemCart key={product.id} producto= {product}/>)
       }
       <p> Total : {finalProductos()} </p>
        <Link to="/checkout">Confirmar compra</Link>
      
     </div> 
    </>
  )
}

export default Cart