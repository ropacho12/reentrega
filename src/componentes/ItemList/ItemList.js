import React from 'react'
import Item from '../Item/Item'
import './ItemList.css';

const ItemList = ({ropa}) => {
  return (
    <div className='Ropa-Item'> 
        <ul className='Ropa-List'>
          {ropa.map(prod=> <Item key={prod.id} {...prod}/> )}
        </ul>
  
  </div>
  )
}

export default ItemList