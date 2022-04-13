import React from "react";
import  store  from "../store/index";
import { Provider} from "react-redux";
import ReduxCounter from "./ReduxCounter";
//connect函数  provider组件
class ReduxComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    handldAdd=()=>{
        this.setState({count:this.state.count+1})
    }
    handldRedux=()=>{
        this.setState({count:this.state.count-1})
    }
    render(){
        return (
            <div>
                <h3>我是counter组件</h3>
                <div>
                    <button onClick={this.handldAdd}>加1</button>
                    <span>{this.state.count}</span>
                    <button onClick={this.handldRedux}>减1</button>
                    {/* 要通过Provider包裹，不然state不会被传到子组件中来 */}
                    <Provider store={store}>
                       <ReduxCounter /> 
                    </Provider>
                </div>
            </div>
        )
    }
}

export default ReduxComponent;