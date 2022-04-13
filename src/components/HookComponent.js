import React,{useState,useEffect,useRef,useCallback,useMemo} from 'react';
import SubCount from "./SubCount";
import ReducerComponents from "./ReducerComponents"
import {useNumber} from './useNumber'

function HookComponent(params) {
    const [number,setNumber] = useNumber()
    console.log('useNumber:',number,setNumber)
    const number1=2;
    const refInput=useRef(null)
    useEffect(()=>{console.log('refInput',refInput);
        refInput.current.focus()
    },[]);
    //首次渲染才会执行
    //首次执行 count初始值是 {a:1}
    //再次执行，获取到的就不是初始值，而是闭包中的缓存值
    //const  num=2
    const [num,setNum]=useState(88);
    let [count,setCount]=useState(()=>{
        return 10*num;
    });
    //let [count,setCount]=useState({a:1});
    let [refresh,setRefresh]=useState(100);
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>{
                return ++count;
            })
        },1500);
        console.log('我是副作用函数');
        function clear() {
            console.log('我是清除函数');
        }
        return clear
    },[refresh]);
    function handldAdd(){
        //count++;
        //setCount(count);
        //console.log("1count++",num,)
        setCount((count)=>{
            return ++count;
        })
        //num++;
        //console.log("2count++",num++,)
        //传入的值可以是任意类型，state的改变都是异步
        //setCount({...count,b:2});
    }

 //闭包  实现缓存  占用内存  不能盲目使用
 //依赖项频繁变动要考虑是否使用这俩
    const memorized=useCallback(() => {
        return  count;
    },[num]);
    const memorized2=useMemo(() => {
        return  count;
    },[num]);
    console.log('记忆：',memorized())
    console.log('记忆2：',memorized2)
    console.log('原始',count)
   
    function changeNum(){
        setNum(num=>{
            return ++num;
        });
    }
    return (
        <div>            
            <h1>我是hook</h1>
            <p>state值：{count}</p>
            {/* <p>state值：a-{count.a}-b-{count.b}</p> */}
            <button onClick={handldAdd}>点击加1</button>
            <button onClick={()=>{setRefresh(!refresh)}}>重新请求</button>
            <SubCount />
            <ReducerComponents />
            <label htmlFor='name'>label:{number1}</label>
            <input type="text" id="name" ref={refInput}/>
            <button onClick={changeNum} >改变num依赖项</button>
        </div>
    );
}

export default HookComponent;