import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproductsData, sortProducts } from "../Redux/actions";
import { useNavigate } from "react-router-dom";
export const Products = () => {
  // to get all products list on component mounts
  const dispatch = useDispatch()
 const navigate = useNavigate()
  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    dispatch(getproductsData())
  }, []);
  const data = useSelector((state) => state)
  
 
  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
    
    console.log(e.target.value)
    
    dispatch(sortProducts(e.target.value))
  };
  const handleClick = (id) => {
    navigate(`/products/${id}`)
  }
  return (
    <>
      <h2 className="head">Products</h2>
      <select onChange={handleSort} className="select">
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list">
        {/* map throught th products  list and display the results */}
        {data.isLoading ? <h1>"LOADING...."</h1> :
            data.products.map((item) => {
              return (
              <div className="card" onClick={() => handleClick(item.id)}>
                <img src={item.image}></img>
                <h2 className="title">{item.title}</h2>
                <p>${item.price}</p>
                <p>{item.brand}</p>
                <p>{item.category}</p>
              </div>);
            })}
      </div>
    </>
  );
};