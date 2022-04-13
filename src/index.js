import React from 'react';
//提供dom操作的功能库
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import reportWebVitals from './assets/js/reportWebVitals';
import { BrowserRouter} from "react-router-dom";

//ReactDOM将虚拟dom转化为真实dom，
//第一个参数：App，要渲染的组件
//第二个参数：渲染到哪个容器中，挂载在哪个节点上，
//'root'就是public下的index.html中的
//第三个参数：回调


ReactDOM.render(  
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
  ()=>{console.log('渲染成功')}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
