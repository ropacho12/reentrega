import React from 'react'
import { useCartContext } from '../../Context/ContextNew'

const ItemCart = ({producto}) => {
  const {removeCart} = useCartContext();
  
    return (
    <div>
        <img src={producto.img} alt={producto.name}/>
        <div>
            <p>Titulo: {producto.name}</p>
            <p>Cantidad: {producto.stock}</p>
            <p>precio unidad: {producto.precio}</p>
            <p>Subtotal:{producto.stock * producto.precio}</p>
            <button onClick={()=> removeCart(producto.id)}>Eliminar</button>
        </div>

    </div>
  )
}

export default ItemCart