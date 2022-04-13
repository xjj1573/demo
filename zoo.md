react：用于构建用户界面的javascript库
react特点：
    虚拟dom-不是真实的dom，在浏览器端js实现的一套dom api，底层通过dom diff算法，更新有差异化的部分。不会重新渲染整个页面，只更新变了的dom部分，大大提升页面渲染效率。
    组件化-通过组件来开发应用。组件是能完成某个特定功能独立的可重用的代码，代码的可重用性非常高。若干个小组件构成更加复杂的UI。组件逻辑使用js编写而非模板，使得状态与dom分离。
    声明式-数据确定页面就确定，帮助节约大量dom操作代码。为应用每个状态设计简洁的视图，当数据改变时react能有效地更新并正确地渲染组件。
    灵活-能和很多库灵活使用
    高效-
    面向对象化-


    vue&react
    react相对于vue来说react的灵活性和协作性更好一些
    vue有丰富的api，实现起来简单快速
    vue上手学习成本相对低
    大型复杂项目还是比较推荐react


npm install -g create-react-app
create-react-app demo
推荐使用自己搭脚手架，webpack
启动：yarn start /   npm  start


package.json:webpack配置和项目包关联文件，项目中第三方依赖，命令配置。
    script:
            eject:显示webpack目录-npm run eject ,执行后询问输入y,操作不可逆，执行完出现了config目录，包含webpack配置文件等，
node_moudles:项目依赖包
public：放公共文件
src：源码目录  
    App.css
    App.js-跟组件
    index.js-项目入口
    index.css

JSX详解与实战

一切皆js  all in js
什么是JSX 
    推荐使用
    Javascript  and XML
    可拓展的标记性语言（自定义） 更易维护
说明：JSX是react中的一项技术，不是全新的语言，js的扩展


JSX原理
    React.createElement()
    只能有一个顶层元素（根元素）(vue也是)，exam：顶层元素不能有俩div
    
JSX具体用法
    遇到（）当js解析，<>当html解析
    小驼峰命名 tabIndex  不能用tab-index  
    dataid="1"是特列，不能用小驼峰
    想换行一定要用括号包起来
    import React,{Fragment} from 'react';
    <Fragment>占位符,里面可写多个元素，
    不引入也可以用<></>占位,版本16以上都可以用，省代码


基本语法

标签类型
    dom标签   div p  首字母必须小写
    自定义标签-组件  首字母必须大写，为了和dom标签进行区分,函数定义的时候也要大写
    内联样式，比如divStyle，属性值要用''引起来，属性名要用驼峰命名，如果写伪类的话这种样式就无能为力了
表达式    
    {}支持表达式，比如{divTitle}，{true?1:2}跟vue一样，不可以写对象，在style中可以用对象，ex：style={{color:'green'}}
    点击事件onClick 等都是驼峰形式

注释
    //  ，/* */  都不起作用，都会被渲染到页面中，要用大括号包裹{/* */}

 拓展运算符   


虚拟dom与非dom属性

什么是虚拟dom (virtual dom)
    一大亮点
    批处理 diff算法
    dom操作成本高，伴随着大量的计算，浏览器压力越来越大，可能崩掉。


非dom属性以及如何使用
    dangerousSetInnerHTML
    ref
    key





