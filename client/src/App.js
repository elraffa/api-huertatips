import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
// import Form from './components/ui/Form';
import Footer from './components/ui/Footer';
import VerdurasGrid from './components/verduras/VerdurasGrid';

import axios from 'axios';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hemisferios, setHemisferios] = useState([]);
  // const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios('http://localhost:5000/api/valuvas');

      console.log(result.data[0].siembra);
      setItems(result.data);
      //setHemisferios(result.data);
      setIsLoading(false);

      console.log(result);
    };
    fetchItems();
  }, []);

  return (
    <div>
      <Header />
      <div id='container'>
        <VerdurasGrid
          isLoading={isLoading}
          items={items}
          hemisferios={hemisferios}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
