import { createStore } from "redux";
import {
    FETCH_DATA_BEGIN,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL
} from '../actions/dataAction'

const initialState ={
    data:[],
    loading:true,
    error:null,
};

//store需要一个reducer
//(state,action)=new State
//唯一要点：当state变化时要返回全新的对象，而不是修改传入的参数
//必须是纯的，遵守redux原则
export default function dataReducer (state=initialState,action){
    console.log('reducer',state,action)
    switch (action.type){
        case FETCH_DATA_BEGIN:
            return {
                ...state,
                loading:true,
                error:null,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading:false,
                data:action.payLoad.data.list,
            };
        case FETCH_DATA_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payLoad.error,
            };   
        default:
            return state;
    }    
    return state;
}
