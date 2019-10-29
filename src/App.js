import React, {useState} from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Beers from "./components/beers";
import {MDBContainer} from "mdbreact";
import Search from "./components/search";

function App() {
    const container = {height: 1300};

    return (
        <div className={'container-fluid'}>
            <Navbar/>
            {test}
            <MDBContainer style={container} className="text-center mt-2 pt-5">
                <Search search={''}/>
                <Beers numCols={4}/>
            </MDBContainer>
        </div>
  );
}

export default App;
