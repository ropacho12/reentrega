
import './App.css';

import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
// import Contador from './componentes/Contador/Contador';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CartContextProvider } from './Context/ContextNew';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';
// import Formulario from './componentes/Formulario/Formulario';
// import ItemCart from './componentes/ItemCart/ItemCart'


// export const CartContext = createContext ()


function App() {


  return (
    <div className="App">
      <CartContextProvider>
           <BrowserRouter>
                <Navbar/>
              <Routes>  
                <Route path='/' element={<ItemListContainer saludo="Leo Messi Store"/>}/>
                <Route path='/categoria/:categoriaId'  element={<ItemListContainer saludo="Filtrado"/>}/>
                <Route path='/detail/:indumentariaId' element={<ItemDetailContainer />}/>
                <Route path='/Checkout' element={<Checkout/>}/>
                <Route path='/Cart' element={<Cart/>}/>
                {/* <Route path='/Formulario' element={<Formulario/>}/> */}
               </Routes> 
               
            </BrowserRouter>
       </CartContextProvider>  
    </div>
  );
}

export default App;
