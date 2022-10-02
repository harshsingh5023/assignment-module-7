import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from "./components/Banner";
import Product from "./components/Product";
import Footer from "./components/Footer";
import React,{ useState } from "react";


function App() {
  const [item, setItem] = useState(0);
  function handleCartItem(){
    setItem(item + 1);
  };
  return (
    <div className="App">
      <Header cartItem={item}/>
      <Banner />
      <Product handleItem={handleCartItem} />
      <Footer />
    </div>
  );
}

export default App;
