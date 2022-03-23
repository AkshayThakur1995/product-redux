import {useEffect} from "react"
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getproductsData } from "../Redux/actions";

export const SingleProductList = () => {
const params = useParams()
const productId = params.id
const dispatch = useDispatch()
useEffect(() => {
  dispatch(getproductsData())
},[dispatch])
const state = useSelector((state) => state)
console.log(state)

const single = state.products.filter((e) => e.id == productId)
console.log(single)
    // make a request to get the details
  return (
    <div className="single">
      <h1>Product Detail</h1>
      <img src={single[0].image}></img>
      <h3>{single[0].title}</h3>
      <p>${single[0].price}</p>
      <p>{single[0].brand}</p>
      <p>{single[0].category}</p>
    </div>
  );
};
