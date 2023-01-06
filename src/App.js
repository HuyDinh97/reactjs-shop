import useFetchCategory from 'Hooks/useFetchCategory';
import React from 'react';
import Home from './pages/Home';

function App() {
  useFetchCategory();
  return <Home />;
}

export default App;
