import "./ProductCard.css";
import {add, remove} from "../store/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

export const ProductCard = ({product}) => {
    const cartList = useSelector(state => state.cartState.cartList)
    const dispatch = useDispatch()
    const {id, name, price, image} = product;
    const [isInCart, setIsInCart] = useState(false)
    useEffect(() => {
        const productInCart = cartList.find(item => item.id === id);

        if (productInCart) {
            setIsInCart(true);
        } else {
            setIsInCart(false);
        }

    }, [cartList, id])
    return (
        <div className="productCard">
            <img src={image} alt={name}/>
            <p className="name">{name}</p>
            <div className="action">
                <p>${price}</p>
                {isInCart ? (<button className={'remove'} onClick={() => dispatch(remove(product))}>Remove</button>) : (
                    <button onClick={() => dispatch(add(product))}>Add To Cart</button>)}

            </div>
        </div>
    )
}
