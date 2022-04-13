import { createStore } from "redux";
import {ADD,REDUCE } from '../actions/counterAction'

const initialState ={
    count:0,
};


export  default function counterReducer (state=initialState,action){
    console.log('reducer',state,action)
    switch (action.type){
        case ADD:
            return {//不能直接修改state参数，satate.count++;只能通过return的方式返回新的state
                count:state.count+1
            };
        case REDUCE:
            return {
                count:state.count-1
            };
        default:
            return state;
    }    
    return state;
}
