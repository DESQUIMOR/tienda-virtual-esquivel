import { ItemsProvider } from './contexts/CartContext/CartContext';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NavBar from './components/NavBar/NavBar';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Cart from './pages/Cart/Cart';
import Detail from './pages/Detail/Detail';
import Category from './pages/Category/Category';


function App() {

  return (
    <ItemsProvider>
      <Router>
        <div className="App">
          <NavBar/>
          <div className="Content">
            <header className="App-header">
              <h1>
                Tienda Virtual
              </h1>
            </header>
            <Routes>
                <Route path="/" element ={<Home/>}/>
                <Route path="/item/:id" element ={<Detail/>}/>
                <Route path="/category/:category" element ={<Category/>}/>
                <Route path="/about" element ={<About/>}/>
                <Route path="/cart" element ={<Cart/>}/>
              </Routes>
            </div>
        </div>
      </Router>
    </ItemsProvider>
  );
}

export default App;
