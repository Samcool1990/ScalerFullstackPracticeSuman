// 1. Initial State

const initialState = {
    cartItems: [], // Array to hold items added to the cart
    couponCode: null, // Holds the applied coupon code, if any
    total: 0 // Keeps track of the total cost after applying the coupon
  };

// 2. Actions
// We'll define actions to handle adding/removing items, updating the quantity, and applying a coupon code.
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const APPLY_COUPON = 'APPLY_COUPON';

// Action creators
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId
});

export const updateQuantity = (itemId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { itemId, quantity }
});

export const applyCoupon = (couponCode) => ({
  type: APPLY_COUPON,
  payload: couponCode
});

// 3. Reducer
// We'll create a reducer to handle the actions and update the state accordingly.
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        // Add item to cart; if item exists, increase the quantity
        const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
        if (existingItemIndex > -1) {
          // Update the quantity if the item already exists
          const updatedCartItems = [...state.cartItems];
          updatedCartItems[existingItemIndex].quantity += action.payload.quantity;
          return { ...state, cartItems: updatedCartItems };
        }
        // Add new item
        return { ...state, cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }] };
  
      case REMOVE_FROM_CART:
        // Remove item from cart
        return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload) };
  
      case UPDATE_QUANTITY:
        // Update the quantity of a specific item
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.itemId ? { ...item, quantity: action.payload.quantity } : item
          )
        };
  
      case APPLY_COUPON:
        // Apply coupon code; adjust the total if a valid coupon is provided
        const discount = action.payload === 'DISCOUNT10' ? 0.1 : 0; // Example: 10% off
        const totalAfterDiscount = state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * (1 - discount);
        return { ...state, couponCode: action.payload, total: totalAfterDiscount };
  
      default:
        return state;
    }
  };

  
// 4. Redux Store Setup
// To complete the setup, you need to create a Redux store and combine this reducer.

import { createStore, combineReducers } from 'redux';

// Combine reducers (if you have other reducers)
const rootReducer = combineReducers({
  cart: cartReducer
});

// Create Redux store
const store = createStore(rootReducer);

// export default store;


// 5. Usage in a React Component
// Here's an example of how you might use these actions in a React component.


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity, applyCoupon } from './path-to-your-actions';

const CartComponent = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    dispatch(updateQuantity(itemId, quantity));
  };

  const handleApplyCoupon = (couponCode) => {
    dispatch(applyCoupon(couponCode));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.cartItems.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.quantity}</span>
          <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>Increase Quantity</button>
          <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>Decrease Quantity</button>
        </div>
      ))}
      <div>
        <input type="text" placeholder="Coupon Code" onChange={(e) => handleApplyCoupon(e.target.value)} />
        <button onClick={() => handleApplyCoupon()}>Apply Coupon</button>
      </div>
      <div>Total: {cart.total}</div>
    </div>
  );
};

// export default CartComponent;


