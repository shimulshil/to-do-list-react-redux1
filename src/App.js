import React from 'react';
import './App.css';
import TODO from './component/todo';

const App=()=> {
  return (
    <div className="App">
      <h2 style={{marginLeft: "20px",fontSize: "20px"}}>React_Redux_Todo List</h2>
      <span className="title">Todo List</span> <br />
      <TODO />
    </div>
  );
}


export default App;
