import React, { useEffect, useState } from 'react'
// import { galeriaById } from '../../asynckMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { bd } from '../Service/firebase/Index'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
 const [detalle, setDetalle]= useState()
 const {indumentariaId} = useParams()

 useEffect(()=> {
   getDoc (doc(bd,'Camisetas', indumentariaId)).then(response => {
      console.log (response)
      const data = response.data()
      const camisetasDb ={ id: response.id, ...data}
      setDetalle(camisetasDb)
   })
   


 },[indumentariaId])


    return (
    <div className='detail-container'>
        <h1>ITEM DETAIL</h1>
        <ItemDetail {...detalle} />
    </div>
  )
}

export default ItemDetailContainer


// galeriaById(indumentariaId)
// .then (detalle => {
//    setDetalle(detalle)
// })
// .catch (error =>{
//    console.log (error)
// })