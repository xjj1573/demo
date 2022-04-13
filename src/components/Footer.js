import React from 'react';

class  Footer extends React.Component { 
    constructor(props) {
        console.log('1.constructor执行，初始化')
      super(props);
      //组件内部的状态  setState
      this.state = {
        name1:props.name+'ww',
        count:0,
        isShow:true,
        userName:'受控组件初始值',
        texVal:'texVal受控组件初始值'
      }
      this.handldAdd=this.handldAdd.bind(this)//手动绑定
    }
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps执行,nextProps:',nextProps)
    }
    UNSAFE_componentWillUpdate (nextProps,nextState){
        console.log('componentWillUpdate执行','nextProps',nextProps,'nextState',nextState)
    }
    UNSAFE_componentWillMount (){
        console.log('卸载阶段：componentWillUnmount执行')
    }
    componentDidCatch(error,info){
        console.log('error',error,'info',info)
    }
    componentWillMount(){
        console.log('2.componentWillMount执行，在render方法之前调用')
    }
    componentDidMount(){
        console.log('4.componentDidMount函数已执行，组件挂载完之后，dom元素已经插入到页面')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate执行')
        return true
    }
    //class中不会自动把this绑定到实例上，需要在constructor中手动绑定
    handldAdd(){//console.log('this绑定',this)
        //回调  函数   
        //如果想基于当前state进行计算，推荐这种方式，可以保证state一定是最新的
      this.setState(state=>({
        count:++state.count
      }))
      this.props.getChildData(this.state.count)
    }
    handleClick=()=>{
        //通过对象的方式
        this.setState({isShow:!this.state.isShow})
    }
    handleChange=(e=>{
      this.setState({userName:e.target.value})
    })
    handleTxtChange=(e)=>{
      this.setState({texVal:e.target.value})
    }
    handleBtnClick(params,event,){
      console.log('我是传递的参数的值：',params)
    }
    handleBtnClick2(event,params){
      console.log('我是传递的参数的值：',params)
    }
    render() {
        console.log('3.render执行，渲染')
      const {name,age}=this.props;
      return (
        <div >       
          <textarea  onChange={this.handleTxtChange}  
          value={this.state.texVal}> er </textarea >   
          <h2 >我是类组件Footer----hello world3</h2>
          {this.state.isShow? <h4 >我是类组件4Footer----hello world4</h4>:''}
          <p>{name}=={age}=={this.state.name1}</p>
          <button onClick={this.handleBtnClick.bind(this,'bind传递的参数789')}>
            bind传递参数</button>
            <button onClick={(e)=>{this.handleBtnClick2(e,'箭头函数传递的参数456')}}>
            箭头函数传递参数</button>
          <input type="text"  value={this.state.userName}  onChange={this.handleChange} />
          <button onClick={this.handleClick}>显示隐藏</button>
          <button onClick={this.handldAdd}>点击加一{this.state.count}</button>
          {/* <button onClick={this.handldAdd.bind(this)}>点击加一{this.state.count}</button> */}
        </div>
      );
    }
  }

export default Footer;