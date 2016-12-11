import React from 'react';
import Nav from './Nav';
import TodoList from './TodoList';
class App extends React.Component{
  render(){
    return (
      <div className="container">
      <Nav/>
        <TodoList btnColor="blue"/>
      </div>
    )
  }
}

export default App;
