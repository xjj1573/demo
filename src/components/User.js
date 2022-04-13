import React from 'react';
User.defaultProps={
    age:'78'
  }
  
function User(props){
    return (
     <div>
       <h2>我是User组件</h2>
       <p>{props.name}=={props.age}==</p>
     </div>
    );
  }

export default User;