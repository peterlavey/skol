import React, {useContext} from 'react';
import './App.css';
import Navbar from "./components/navbar";
import {MDBContainer} from "mdbreact";
import Store from "./store";
import Home from "./containers/home";

function App() {
    const container = {height: 1300};

    return (
        <div className={'container-fluid'}>
            <Navbar/>
            <MDBContainer style={container} className="text-center mt-2 pt-5">
                <Store>
                   <Home/>
                </Store>
            </MDBContainer>
        </div>
  );
}

export default App;
