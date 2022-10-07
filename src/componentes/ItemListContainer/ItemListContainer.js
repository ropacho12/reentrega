import React, { useEffect, useState } from 'react'
// import { galeria, galeByCategoria } from '../../asynckMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { bd } from '../Service/firebase/Index'
import './ItemListContainer.css'


const ItemListContainer = ({saludo}) => {
  const [ropa, setRopa] = useState ([])

  const {categoriaId}=useParams()
   
  
  useEffect(()=>{
     const camisetasColeccion = !categoriaId
     ? collection (bd, 'Camisetas')
     : query (collection(bd,'Camisetas'), where ('categoria', '==', categoriaId))

    getDocs (camisetasColeccion).then(response =>  {
      console.log(response)
      const camisetasDb = response.docs.map (doc =>{
        const data = doc.data()
        return {id: doc.id, ...data}

      })
      setRopa(camisetasDb)
    })
  

    
  }
 , [categoriaId])
  
  return (
    <>
    <div className='Iten-container'>
        <h1> {saludo}</h1>
      
      <ItemList  ropa={ropa}/>
      </div>
    </>
  )
}

export default ItemListContainer


  // const asynckFuntion = categoriaId ?  galeriaByCategoria : galeria  
    // asynckFuntion(categoriaId).then(hola =>{
    //   setRopa(hola)
    // // })

    // if(!categoriaId){
    //   galeria().then(productos =>{
    //     setRopa(productos)
    //   })
    // } else {
    //   galeByCategoria(categoriaId).then(productos =>{
    //     setRopa(productos)
    // })