import React from 'react';
import './App.css';
import Header from "./components/header";
import Beers from "./components/beers";

function App() {
  return (
    <div className={'container-fluid'}>
      <Header/>
      <Beers/>
    </div>
  );
}

export default App;
