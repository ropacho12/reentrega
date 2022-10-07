import React from 'react'
import { useState, useContext } from 'react'
import CartContext from '../../Context/ContextNew'

import { bd } from '../Service/firebase/Index'
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'


// import { async } from '@firebase/util'

const Checkout = () => {
    const [cargando, setCargando] = useState(false)
    const {carrito, finalProductos, cantidadCarrito, removeCart } = useContext(CartContext);
     
    const totalQuantity= finalProductos ()
    const total=cantidadCarrito()
    
    
    const crearOrden = async () => {
        setCargando (true)
        try
        {const ordenCompra = {
            compra: {
                nombre:'Lucca',
                apellido:'Pacho',
                tel:'3454544',
                direccion:'calle 124'
            },
            Items: carrito,
            totalQuantity,
            total,
            cantidadCarrito,
            Fecha: new Date() 
        }
        // const ordenref = collection(bd, 'orders')
        // addDoc(ordenref, ordenCompra).then (response =>{
        //     console.log(response)
        // } )
        const ids = carrito.map (prod => prod.id)
        const productosRef = collection (bd, 'Camisetas')
        const agregadosFirestore = await getDocs (query(productosRef, where(documentId(),'in', ids)))
    
        const {docs} = agregadosFirestore
        const fueraDeStock =[]
        const batch = writeBatch(bd)
        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockBd = dataDoc.stock
    
            const productoAgregado = carrito.find (prod =>prod.id === doc.id)
            const prodCantidad = productoAgregado?.cantidadCarrito
            
            if (stockBd >= prodCantidad){
                batch.update(doc.ref, {stock: stockBd - prodCantidad} )
    
            }else{
                fueraDeStock.push({id: doc.id, ...dataDoc})
            }
        })
        if (fueraDeStock.length ===0){
            await batch.commit()
            const productosRef = collection (bd, 'orden')
            const agregarOrden = await addDoc (productosRef, ordenCompra )

    
            console.log (`el id es ${agregarOrden}`)
            removeCart()
        } else{
            console.log ('stock no disponible')
        }
    } catch (error){
        console.log (error)
    } finally {
        setCargando (false)
    }
    
    
 }
if (cargando)
return <h1>cargando orden</h1>

    return (
    <>
    <h1>Checkout</h1>
    <button onClick={crearOrden}> Generar Compra </button>
    

    
    </>
    )
}

export default Checkout