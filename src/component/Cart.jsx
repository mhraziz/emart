import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { delCart,incrementQty,decrementQty } from '../redux/action/index'; // Ensure the action for deleting items is imported
import "./Cart.css";


const Cart = () => {
    const cartItems = useSelector((state) => state.handleCart); // Use selector to get cart items
    const dispatch = useDispatch();

    // Function to handle deleting an item from the cart
    const handleDelete = useCallback((item) => {
        dispatch(delCart(item));
    },[dispatch]);

    const handleIncrement = useCallback(
        (item) => {
            dispatch(incrementQty(item));
        },
        [dispatch]
    );

    // Handle decrementing quantity
    const handleDecrement = useCallback(
        (item) => {
            dispatch(decrementQty(item));
        },
        [dispatch]
    );

   
    // Function to display individual cart items
    const renderCartItem = (item) => (
        <div className="cart-item" key={item.id}>
            <div className="cart-item-details">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-info">
                    <h3>{item.title}</h3>
                    <p className="price">${item.price}</p>
                    <div className="quantity-controls">
                      <button 
                        className="btn btn-secondary" 
                        onClick={() => handleDecrement(item)}
                        disabled={item.qty <= 1}
                       >
                        -
                     </button>
                    <span className="quantity">{item.qty}</span>
                    <button 
                        className="btn btn-secondary" 
                        onClick={() => handleIncrement(item)}
                    >
                        +
                    </button>
                </div>
                </div>
            </div>
            <div className="cart-item-actions">
                <button className="btn btn-danger" onClick={() => handleDelete(item)}>
                    Remove
                </button>
            </div>
            
        </div>
    );
    
    // Function to display individual cart items
    // const renderCartItem = (item) => (
    //     <div className="cart-item" key={item.id}>
    //         <div className="cart-item-details">
    //             <img src={item.image} alt={item.title} className="cart-item-image" width="200px" height="auto"/>
    //             <div className="cart-item-info">
    //                 <h3>{item.title}</h3>
    //                 <p className="price">${item.price}</p>
    //                 <p>Quantity: {item.qty}</p>
    //             </div>
    //         </div>
    //         <div className="cart-item-actions">
    //             <button className="btn btn-danger" onClick={() => handleDelete(item)}>
    //                 Remove
    //             </button>
    //         </div>
    //     </div>
    // );

    // Function to display the message when the cart is empty
    const renderEmptyCart = () => (
        <div className="empty-cart">
            <h3>Your cart is empty.</h3>
            <NavLink to="/" className="btn btn-primary">
                Go back to shop
            </NavLink>
        </div>
    );

    // Render the cart
    return (
        <div className="cart-container">
            <h1>Your Shopping Cart</h1>
            {cartItems.length === 0 ? renderEmptyCart() : cartItems.map(renderCartItem)}
            {cartItems.length > 0 }
                {/* <div className="checkout-section">
                    <NavLink to="/checkout" className="btn btn-success">
                        Proceed to Checkout
                    </NavLink>
                </div> */}
            
        </div>
    );
};

export default Cart;

