import { data } from "browserslist";
import React from "react";
import { connect } from "react-redux";
import { add, reduce } from "../store/actions/counterAction";
import { fetchData } from "../store/actions/dataAction";
//函数 ,用于建立组件和store的state的映射关系，可以改名字，一般叫这个
function mapStateToProps(state) {
  console.log("state", state);
  return {
    count: state.counter.count,
    data: state.data.data,
    loading: state.data.loading,
    error: state.data.error,
  };
}

const mapDispatchToProps = {
  add,
  reduce,
  fetchData,
};

class ReduxCounter extends React.Component {
  handleAdd = () => {
    this.props.add(); //this.props.dispatch(add()) //this.props.dispatch({type:ADD});
  };
  handleReduce = () => {
    this.props.reduce(); //this.props.dispatch(reduce())//this.props.dispatch({type:REDUCE});
  };
  componentDidMount() {
    this.props.fetchData().then((res) => {
      console.log("componentDidMount生命周期，", res);
    });
  }
  render() {
    const { error, loading, data } = this.props;
    console.log("props:", this.props, "data:", data);
    const test1 = [0, 2, 3, 6, 4, 6];
    if (error) {
      return <div>页面加载出错，{error} </div>;
    }
    if (loading) {
      return <div>页面正在加载中。。。。。</div>;
    }
    return (
      <div>
        <h3>我是ReduxCounter组件</h3>
        <ul>
          {data.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ul>
        ================================================================
        <ul>
          {data.map(item => (
            <>
             <li key={item+2}>{item}</li>
             <h2>erwoj weo</h2>
             </>
          ))}
        </ul>
        ================================================================
        <ul>
          {data.map(item => 
             <li key={item+1}>{item}</li>             
          )}
        </ul>
        <button onClick={this.handleAdd}>加1</button>
        <span>{this.props.count}</span>
        <button onClick={this.handleReduce}>减1</button>
      </div>
    );
  }
}
//传入mapStateToProps这个参数后，组件便会订阅store中状态的变化
//connect是一个高阶函数，传入mapStateToProps后返回一个函数，高阶组件
//state和dispatch都映射了
//mapDispatchToProps作为第二个参数传入
export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
