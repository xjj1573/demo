import React from 'react';
import About from "./About";
import  Info from "./Info";
import { Route,Link } from "react-router-dom";
function Home(props){
    function handleClick(){
        props.history.push("/about");
    }
    return(
        <div>
            <h1>我是Home组件</h1>
            <button onClick={handleClick}>跳转到about</button>
            <div>
                <Link to={`${props.match.path}/one`}>二级路由一</Link>
                <Link to='/home/two'>二级路由二</Link>
            </div>
            <Route path={`${props.match.path}/one`} component={About} />
            <Route path="/home/two" component={Info} />
        </div>
    )
}

export default Home;