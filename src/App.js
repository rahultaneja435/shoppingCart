import './App.css';
import Products from './Components/Products/Products'
import Navbar from './Components/Navbar/Navbar';
import {commerce} from './Commerce/Commerce'
import { useEffect, useState } from 'react';
import productor from '../src/Components/Products/util'
import Cart from './Components/Cart/Cart'

function App() {
  const [products,setProducts] = useState([]); // using this for fetching products list from commerce API
  const [cart,setCart] = useState({});
  const [length,setLength]=useState();
  const [carter,setCarter] = useState([]);
  const productFetcher = async()=>
  {
    
    const result  = await commerce.products.list(); //promise will be received
    console.log(result);
    setProducts(Object.entries(result.data));
  }
  // const onClickCart=(productor)=>
  // {
  //  setCarter(productor);
  //  console.log(carter);
  // }
  const cartData = async()=>
  {
    const resulter = await commerce.cart.retrieve();
    setCart(resulter);
  }
  useEffect(()=>
  {
   productFetcher();
   cartData();
  },[])
  console.log(products);
  console.log(cart);
  const handleCart = async (productId,quantity)=>
  {
    const resp = await commerce.cart.add(productId,quantity)
    setCart(resp)
  }
  return (
    <div className="App">
      <Products productData={products} onAddCart={handleCart} />
      <Navbar cartLength={cart.total_items}/>
      {/* <Cart cart={cart}/> */}
    </div>
  );
}

export default App;
