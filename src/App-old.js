import logo from './logo.svg';
import './assets/css/App.css';
import React,{Fragment} from 'react';
import { readConfig } from 'browserslist';
import  Conponent1 from './components/Conponent1'
import HookComponent from "./components/HookComponent";

import Home from "./components/Home";
import About from "./components/About";
import  Info from "./components/Info";
import  NotFound from "./components/NotFound";
import { /* Routes */ Route,Link,Switch,NavLink,Redirect,withRouter} from "react-router-dom";
function App(props) {
  const isLogin=false
  console.log('props',props)
 return (
   <>jing  feng
   {/*  <Routes> */}
      <div> 
        <Link to="/" >跳转到默认页</Link>  
      </div>
      <div> 
        <Link to={{pathname:'/home',search:"?name=jjff"}} >跳转到home</Link>  
      </div>
      <div>
      <NavLink to="/about"  activeStyle={{color:"green"}}>跳转到about</NavLink>
      </div>
      <div> 
        <Link to="/children" >跳转到children</Link>  
      </div>
      <Switch>
        <Route path="/info" render={()=>{return isLogin?<Info/>:<Redirect to="home"/>}} />
        <Route path="/" exact component={Info} />
        <Route path="/home" component={Home} />
        <Route path="/about/:id" component={About} />
        <Route  component={NotFound} />
      </Switch>
      {/* <Route path="/render" render={()=>{return <h1>我是render渲染的</h1>}} />
      <Route path="/children" children={({match})=>{return <h1>我是children渲染的{match?match.path:''+match}</h1>}}/> */}
     {/*  </Routes> */}
   </>
 );
}  

  {/* <HookComponent /> */}
    {/* <Conponent1 /> */}

//浏览器中无法执行jsx代码文件，必须先转化为常规代码，就相当于编译的过程
//babel将jsx编译为正常代码，通过React.createElement()函数进行调用转化
//上面代码就相当于下面函数

/* function App() {
  const divTitle="我是app";
  const element = React.createElement(
    "div",
    { title: divTitle },
    React.createElement("h2", null, "hello world!")
  );
 return element;
}  */
//类组件
/* class  App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>hello world2</h2>
      </div>
    );
  }
} */

export default  withRouter(App);
