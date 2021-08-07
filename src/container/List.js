import React, { useState } from 'react';

// Components
import Card from '../components/Card/Card';

const List = () => {
  const [isLoading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  return (
    <div>
      <Card />
      <Card />
    </div>
    
  )
}

export default List;