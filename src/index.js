import React from 'react';
import ReactDOM from 'react-dom';

// Import Store
import Store from './state/Store';

// Component Imports
import List from './container/List';

const App = () => {
  return (
    <Store>
      <List />
    </Store>
  )
};

ReactDOM.render(<App />, document.getElementById('react-entry'));