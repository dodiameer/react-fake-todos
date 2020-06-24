import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div>
      <Header/>
      <TodoList/>
      <Footer/>
    </div>
  );
}

export default App;
