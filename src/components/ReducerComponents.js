import React,{useReducer} from  'react'

//useReducer 接收三个参数

//(state,action)=>newState
//定义简单的reducer
//state:当前状态值，action告诉reducer执行了什么操作，接收动作指令
//第一个参数
const reducer =(state,action)=>{
    switch(action.type){
        case "add":
            return {...state,count:state.count+1};
        case "reduce":
            return {...state,count:state.count-1};
        default:
            return state;
    }
};

//定义第二个参数 createStore() 指定默认值
let initialState={count:11,name:'recuder'};

//定义第三个参数  函数   会把第二个参数当作参数执行
const init=initialState=>{
    return {count:initialState.count+2};
};

//Store reducer  Action 三大核心redux

export default function  ReducerComponents(){
    const [state,dispatch]=useReducer(reducer,initialState,init);
    return(
        <div>
        <p>ReducerComponent的count：{state.count}</p>
        <button onClick={()=>dispatch({type:'add'})}>加</button>
        <button onClick={()=>dispatch({type:'reduce'})}>减</button>
        </div>
    )
}