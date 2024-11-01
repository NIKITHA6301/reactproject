import {useDispatch, useSelector} from "react-redux";
import { addtToCart } from "./store";




function VegItems()
{
    const dispatch=useDispatch()


    

    const vegproducts=useSelector(state=>state.products.veg)
    const items=vegproducts.map((product,index)=>(
        <li key={index}>
            {product.name} -${product.price.toFixed(2)}
            <button onClick={()=>dispatch(addtToCart(product))}>addToCart</button>





            
        </li>
    )
);
    return(
        <>
        <h1>Veg Products</h1>
        <ul>
            {items}
        </ul>

        </>
    )
}
export default VegItems;