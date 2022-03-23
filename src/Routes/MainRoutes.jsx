import {Routes, Route} from "react-router-dom"
import About from "../components/About"
import Home from "../components/Home"
import { Products } from "../components/ProductsDashboard"
import { SingleProductList } from "../components/SingleProduct"
export const MainRoutes = ()=>{
    return(
        <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProductList />} />
        </Routes>
        </div>
    )
}