import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { onAdd, onDelete, init } from "../Stores/FavouriteStore";


const reducer = (state, action) => {
    switch(action.type) {
        case "increment": {
            return {...state, count: state.count + 1};
        }
        case "decrement": {
            return {...state, count: state.count - 1};
        }
        case "change": {
            return {...state, count: action.payload};
        }
        default: {
            return state;
        }
    }
};

const action = {
    decrement: () => {
        return {type: 'decrement'};
    },
    increment: () => {
        return {type: 'increment'};
    },
    changeValue: (data) => {
        return {type: 'change', payload: data};
    }
};


const Counter = () => {
    const [state, dispath] = useReducre(reducer, initialState);
    return(
        <div>
            <button onClick={state}></button>
        </div>
    )
}

export default Counter;
