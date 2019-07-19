import React from 'react';
import './App.css';
import Child from './modules/child1/src/component/Child/Child';
import Child2 from './modules/child2/src/components/Child2/Child2';

function App() {
  return (
    <div className="App">
      TOP APP
      <Child />
      <Child2 />
    </div>
  );
}

export default App;
