import './App.css';
import Products from './Components/Products/Products'
import Navbar from './Components/Navbar/Navbar';
import {commerce} from './Commerce/Commerce'
import { useEffect, useState } from 'react';
import productor from '../src/Components/Products/util'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
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
    setCart(resp.cart)
  }
  console.log(cart.line_items);

  const handleUpdateQty = async(productId,quantity)=>
  {
    const {cart} = await commerce.cart.update(productId,{quantity})
    setCart(cart);
  }

  const handleRemoveQty = async(productId) =>
  {
    const {cart} = await commerce.cart.remove(productId);
    setCart(cart);
  }

  const handleemptyCart = async()=>
  {
    const {cart}= await commerce.cart.empty();
    setCart(cart);
  }
  return (
    <Router>
    <div>
      <Navbar cartLength={cart.total_items}/>
      <Switch>
        <Route exact path="/">
        <Products productData={products} onAddCart={handleCart} />
        </Route>
        <Route exact path="/cart">
        <Cart 
        cartData={cart.line_items} 
        cartData1={cart} 
        handleUpdateQty={handleUpdateQty} 
        handleRemoveQty={handleRemoveQty} 
        handleemptyCart={handleemptyCart}/>
        </Route>
        <Route exact path="/checkout">
          <Checkout cart={cart}/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
