import React, { useState } from "react";
import Filter from "./filterproducts/Filter";
import Products from "./products/Products";
import Sidebar from "./sidbar/Sidebar";
import data from "./../data.json";

const Home = () => {
  const [item, setItem] = useState(data.products);
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [cartItems,setCartItems]= useState([])

  const sortProducts = (e) => {
    setSort(e.target.value);
    if (sort === "asc") {
      setItem(data.products.sort((a, b) => (a.id < b.id ? 1 : -1)));
    }
    if (sort === "desc") {
      setItem(data.products.sort((a, b) => (a.id > b.id ? 1 : -1)));
    }
  };
  const filterProuducts = (e) => {
    if (e.target.value === "") {
      setBrand(e.target.value);
      setItem(data.products);
    } else {
      setBrand(e.target.value);
      setItem(
        data.products.filter(
          (product) => product.avalebleBrand.indexOf(e.target.value) >= 0
        )
      );
    }
  };
  const addProducts =(item)=>{

    const exist = cartItems.find((element)=> element.id === item.id)
    if(exist){
      setCartItems(
        cartItems.map((element)=>element.id === item.id ? {...exist,qty:exist.qty+1} :element )
      )
    }else{
      setCartItems([...cartItems,{...item,qty:1}])
    }
  }
  const removeItem = (item)=>{
    const exist = cartItems.find((element)=> element.id === item.id)
    if(exist.qty === 1){
      setCartItems(cartItems.filter((element)=> element.id !== item.id))
    }else{
      setCartItems(cartItems.map((element)=>element.id === item.id ? {...exist,qty:exist.qty-1} :element ))
    }
  }
  return (
    <div className="container">
      <header className="header">
        <a href="#">فروشگاه عمو حسین</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={item.length}
              sortProducts={sortProducts}
              brand={brand}
              filterProuducts={filterProuducts}
            />
            <Products items={item} 
              addProducts={addProducts}
            />
          </div>
          <Sidebar cartItems= {cartItems}
            removeItem={removeItem}
          />
        </div>
      </main>
      <footer>طراحی و توسعه توسط منو تو</footer>
    </div>
  );
};

export default Home;
