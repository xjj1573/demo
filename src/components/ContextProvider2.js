import React,{createContext,useState,Children} from  'react'

export const context2 = createContext({});

export function ContextProvider2({children}){
    const [val,setVal]=useState(100);
    const conutVal2={
        val,
        setVal,
       /*  add:()=>setCount(count+1),
        reduce:()=>setCount(count-1) */
    };
    //context对象中提供了一个自带的Provide组件 ,别的组件中就可以使用useContext
    return <context2.Provider value={conutVal2}>{children}</context2.Provider>
}