

import './Item.css'
import { Link } from 'react-router-dom'
// import {useCartContext} from '../../Context/ContextNew'
// import { useContext } from 'react'

const Item = ({id, name, img, categoria }) => {
  // const nombre = useCartContext (useContext);{
  //   console.log (nombre)
  // }
  
  return (
    <div  className='card-padre'>
      <div className='card' >
      <img className='card-img-top'  src={img} alt={name}/>
      
      <div className='card-text'>
      <h1>{name}</h1>
      <p> {categoria} </p>

      </div>
      <div className='btn btn-primary' >
        <Link className='btn-linck' to={`/detail/${id}`}> Ver Detalle</Link>
          
      </div>

      </div>
    </div>
  )
}

export default Item