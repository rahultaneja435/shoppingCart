import logo from './logo.svg';
import './App.css';
import Products from './Components/Products/Products'
import Navbar from './Components/Navbar/Navbar';
import {commerce} from './Commerce/Commerce'
import { useEffect, useState } from 'react';

function App() {
  const [products,setProducts] = useState([]); // using this for fetching products list from commerce API
  const productFetcher = async()=>
  {
    
    const result = await commerce.products.list(); //promise will be received
    console.log(result);
    setProducts(result);
  }
  useEffect(()=>
  {
   productFetcher();
  },[])
  return (
    <div className="App">
      <Products/>
      <Navbar/>
    </div>
  );
}

export default App;
