import React from "react";
import {store}  from "../redux/store"
import { addCounter,reduceCounter } from "../redux/action";
import { AppContext } from "../redux/AppContextProvider";
const Counter=()=>{
const{counter}=store.getState();
const {dispatch}=store;
const [state,setState]=React.useState(0)
// const {dispatch,getState}=React.useState(AppContext)
// const {counter}= getState;

const forceUpdate=()=>{
    setState(state+1)
}

const handleADD=()=>{
    dispatch(addCounter(1));
    forceUpdate()
}


const handleReduce=()=>{
    dispatch(reduceCounter(1));
    forceUpdate()
}


    return(
    <>
    <h1>counter:{counter}</h1>
    <button onClick={handleADD}>ADD</button>
    <button onClick={handleReduce}>REDUCE</button>
    </>
    )
}
export {Counter}