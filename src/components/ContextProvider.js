import React,{createContext,useState,Children} from  'react'

export const context = createContext({});

export function ContextProvider({children}){
    const [count,setCount]=useState(10);
    const conutVal={
        count,
        setCount,
        add:()=>setCount(count+1),
        reduce:()=>setCount(count-1)
    };
    //context对象中提供了一个自带的Provide组件 ,别的组件中就可以使用useContext
    return <context.Provider value={conutVal}>{children}</context.Provider>
}