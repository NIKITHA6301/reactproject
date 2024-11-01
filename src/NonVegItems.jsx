import { useDispatch, useSelector } from "react-redux";
import { addtToCart } from "./store";

function NonVegItems()
{
    const dispatch=useDispatch()

    const nonvegproducts=useSelector(state=>state.products.nonveg)
    const item=nonvegproducts.map((product,index)=>(
        <li key={index}>
            {product.name} -${product.price.toFixed(2)}
            <button onClick={()=>dispatch(addtToCart(product))}>addToCart</button>

        </li>
    )
)
    
    return(
        <>
        <h1>Nonveg Products</h1>
        <ul>
            {item}
        </ul>
        </>
    )
}
export default NonVegItems;