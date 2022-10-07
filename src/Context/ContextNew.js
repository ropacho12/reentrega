import React, { useState, useContext } from "react"
import Item from "../componentes/Item/Item"

 const CartContext = React.createContext([])

 export const useCartContext = () => useContext (CartContext);

 export const CartContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState ([])
    // console.log (carrito)
    const agregarItem = (agregarProducto) =>{
      setCarrito ([...carrito, agregarProducto])
    }
    
    const cantidadCarrito = () =>{
      let compra = 0
    
      carrito.forEach (prod => {
        compra += prod.total
      })
      return compra
    }



    const clearCart = ()=> setCarrito ([]);

    const isInCart = (id) => {
      return carrito.find (product => product.id === id) ? true : false;
    }
    
    const removeCart = (id)=> setCarrito (carrito.filter (product => product.id !== id));
    
    const addCarrito = (total, cantidadCarrito) =>{
      const newCart = carrito.filter (prod => prod.id !== total.id);
      newCart.push ({...Item, cantidad : cantidadCarrito })
setCarrito ()



    //   if (isInCart (Item.id)) {
    //     setCarrito (carrito.map (product=> {
    //       return product.id === Item.id ? {...product, cantidadCarrito: product.cantidadCarrito+ cantidadCarrito} : product}));
    // } else{
    //       setCarrito ([...carrito, {...Item, cantidadCarrito}]);
    //      }
   }
    //totalprodcu
   const finalCompra =() => {
    return carrito.reduce((prev, act)=> prev + act.cantidadCarrito * act.precio, 0);
  }
  //totalprice
  const finalProductos =()=> carrito.reduce((acumulador, productoActual)=> acumulador + productoActual.cantidadCarrito,0)


  return (
    <CartContext.Provider value={{
      carrito,
      agregarItem, 
      cantidadCarrito,
      

      clearCart,
      isInCart,
      removeCart,
      addCarrito,
      finalCompra,
      finalProductos,

      }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext