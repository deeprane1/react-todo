import React from 'react';
import './App.css';
import Navbar from './nav/nav';
import TodoList from './TodoList/TodoList'

function App() {
  return (
    <div className="App">
      <Navbar />
      <TodoList />
    </div>
  );
}

export default App;
