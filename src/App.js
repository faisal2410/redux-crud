import React from 'react';
import CounterPage from './pages/CounterPage';
import TodoPage from './pages/TodoPage';
import {Routes,Route} from 'react-router-dom'
import Header from './Common/Header/Header';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<CounterPage></CounterPage>}></Route>
        <Route path="/todo" element={<TodoPage></TodoPage>}></Route>

      </Routes>    
      
    </div>
  );
};

export default App;