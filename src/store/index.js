import { createStore ,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

//store需要一个reducer
//(state,action)=new State
//唯一要点：当state变化时要返回全新的对象，而不是修改传入的参数
//必须是纯的，遵守redux原则
/* function reducer (state=initialState,action){
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
} */
//将applyMiddleware传入第二个参数包裹住thunk，否则不生效 ,回调函数，applyMiddleware是react提供的一个应用中间件
const store = createStore(rootReducer,applyMiddleware(thunk));
/* store.dispatch({type:'ADD'});
store.dispatch({type:'REDUCE'});
store.dispatch({type:'REDUCE'}); */
//创建store存放应用状态
export default store;