import React,{Fragment} from 'react';
import User from './User'
import Footer from './Footer'
import HookComponent from "./HookComponent";

//根组件 函数组件      //无状态推荐函数组件使用
function Conponent1() {
    const divTitle="我是app";
    const divTitle2="我是app2";
    const props={name:'金峰',age:18}
    const userRef=React.createRef()//创建一个ref
    const inputRef=React.createRef()
    const inputRef2=React.createRef()    
    const divStyle={
     color:'red',
     fontSize:'26px'
    };
    function handleClick(){
     console.log('点击触发',userRef,'非受控组件的值：',inputRef2.current.value)
     //inputRef.current.focus();//获取焦点
   }
   function getChildData(data){
     console.log('接收到子组件的值',data)
   }
   
   return (
     <>
     <Fragment>
     
     <div style={divStyle} title={divTitle} className="App" tabIndex="1" dataid="1">
       <h2  title={divTitle2} >hello world2</h2>
       <h2>我是component1组件</h2>
       <textarea  defaultValue="我是非受控组件默认用户名texarwe"/>
     </div>
     {<div>hello world3</div>}
     <p style={{color:'green'}}>我是p标签{divTitle2}-{true?10:20}</p>
     <button onClick={handleClick}>点击事件</button>     
     <User   name="静静"  title={divTitle2}></User>
     <Footer getChildData={getChildData} ref={userRef}  {...props}></Footer>
     <input type="text"  ref={inputRef} />
     <div dangerouslySetInnerHTML={{__html:'<p>我是插入的html</p>'}}></div>
     <div>
       <label htmlFor="name">用户名</label>
     <input type="text" id="name" defaultValue="我是非受控组件默认用户名" ref={inputRef2} />
     
     </div>     
     </Fragment>
     </>
   );
 }  

export default Conponent1;