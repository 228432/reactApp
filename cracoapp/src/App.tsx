import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App(props:any) {
  const {num,changeNum}=props
  return (
    <div className="App">
          <div>{num}</div>
          <button onClick={()=>{changeNum()}}>change</button>
    </div>
  );
}
const stateToprop=(state:any)=>{
    return {
      num:state.dome.num
    }
}
const dispatchToprop={
  changeNum(){
    return (dispatch:any)=>{
        dispatch({type:'1',data:2})
    }
  }
}

export default connect(stateToprop,dispatchToprop)(App);
