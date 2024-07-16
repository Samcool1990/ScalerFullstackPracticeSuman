import React, {lazy, useMemo} from "react";

const LazyComponent = lazy(() => import('./LazyComponent'))

function App(){
    return(
        <div>
            <h1> App Componenet</h1>
            <React.Suspense fallback={<div> Loading...</div>}>
            <LazyComponent/>
            </React.Suspense>
        </div>
    )
}

// What is the advantage of using lazy loading for componenets like LazyComponent ?


import { func, object } from "prop-types";
import React, {useReducer, useState} from "react";


const initialState = {count, 0}

function reducer(state, action){
    switch (action.type) {
        case 'increament':
            return {count: state.count + 1}
        case 'decreament' :
            return {count: state.count - 1}
        default:
            return state
    }
}


function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: 'increament'})}>Increament</button>
            <button onClick={() => dispatch({type: 'decreament'})}>Decreament</button>
        </div>
    )
}

// What does the useReducer hook do in the above code?

// 1. it fetch data from server
// 2. it runs a side effect wen the componenet mounts
// 3. it manages the state of the Counter componenet
// 4. it optimizes rendering without any extrac code 

// What is the reconciliation in React ? 
// 1. A process to determine how to update the componenet tree when the DOM changes
// 2. A process to determine how to update the DOM when a componenet's state or props change
// 3. A process to determine how to update the componenet tree when a componenet's state or props change
// 4. A process to determine how to update the DOM when the componenet tree changes


// how is the state object updated in functional componenet that uses the useState hook ??
// 1. by calling the setState() method of the React object
// 2. by calling the function returned by the useState hook
// 3. by calling the updateState() method of the React object
// 4. by reassigning the value of the state property

// What is jsx ?
// 1. all of the above
// 2. a syntax extension for javascript
// 3. a library for building use interfaces
// 4. a way to write HTML-like code in javascript

const {createAsyncThunk, createSlice} = require("@reduxjs/toolkit")

const fetchUser = createAsyncThunk("uer/fetchUser", async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return response.json()
})

const useSlice = createSlice({
    name: "user",
    initialState: { data: null, loading: false, error: null},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

// In the code AnimationPlaybackEvent, what will the "fetchUser.pending" action indicate in the Reduc store ?
// 1. An error occured while fetching the user data
// 2. The user data fetchoperation was cancelled
// 3. The user data fetch has completed sucessfully
// 4. The user data is being fetched from the server



import React, {useState,useTransition} from "react";


function App() {
    const [startTransition, isPending] = useTransition()
    const [visible, setVisible] = useState(false)


    function handleClick() {
        startTransition(() => {
            setVisible(!visible)
        })
    }

    return (
        <div>
            <h1>App Component</h1>
            <button onClick={handleClick}>Toggle Component</button>
            {isPending  ? <p>Updating...</p>: null }
            {visible && <p>visible componenet.</p>}
        </div>
    )
}

What does the above code acheive using useTransition hook ?
1. it transitions between different componenets smoothly
2. it displays a loading message while performing an expensive synchronous update
3.it updates the componenet state asynchronously
4. it fetchs data from the server

what is the primary purpose of the dispatching an action in Redux ?
1. to signal a change in application state, handled by the reducer
2. to directly modify the state in a componenet
3. to send data asynchronously to an external API
4.to trigger a re-dender of all connected componenets


what is a higher-order componenet (HOC) in react ?
1. a componenet that consumes the shared state in a child componenet
2. a componenet that injects the shared state into the wrapped componenet as a prop
3. a function that takes a componenet as argument and returns a new componenet


What is a React componenet ?
1. a hook that allows functional componenets to store and manage data
2. a piece of self-contained code that is responsible for a specific part of the ui
3. a method of the React.Component class that triggers a re-render of componenet
4. an object that contains data specific to a componenet that can change over time


How do you access  dynamic parameters in React Router ?
1. use the useParam hook
2. use the useRoute hook
3. use the useParams hook


import React, {useState, useEffect} from "react";


function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://api.example.com/data")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log('Error fetching data:', error))
    }, [])

    return (
        <div>
            <h1>App Componenet</h1>
            <ul>
                {data.map(() => (
                    <li key = {item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

What does the above code do  ?
1.it fetch data from sercer and displays it as a list using the useEffect hook
2. it uses the useReducer hook to manage the state of the list of items
3.it creates a basic React componenet with the list of items fetched from the server
4. it uses the useMemo hook to a optimize rendering for the list of items


How does the virtual DOM improve the maintainability of a React application ?
1. it allows developers to focus on the logical structure of their application
2. it reduces the number of DOM manipulation operations that need to be performed
3. all of the above
4. it abstracts away the complexity of DOM manipulation


import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count +1)}> Increament</button>
        </div>
    )
}

What does the above code demonstrate? 
1. a functional componenet using the useState hook
2. a componenet using Redux for state management
3. a basic react componenet using the class syntax
4. a functional componenet using the useState hook