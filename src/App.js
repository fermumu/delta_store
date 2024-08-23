import './App.css'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import { CartProvider } from './contex/CartContext';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';

import FavoritosPage from './components/FavoritosPage';
import Home from './components/Home';
import AdminProducts from './components/AdminProducts';
import AdminPedidos from './components/AdminPedidos';

function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
            <Route path='/productos' element={<ItemListContainer/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/carrito' element={<Carrito/>}/>
            <Route path='/favoritos' element={<FavoritosPage/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/adminProducts' element={<AdminProducts/>}/>
            <Route path='/adminPedidos' element={<AdminPedidos/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
