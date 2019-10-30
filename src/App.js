import React from 'react';
import {MDBCol, MDBRow} from "mdbreact";
import Store from "./store";
import Navbar from "./components/navbar";
import Home from "./containers/home";
import './App.css';

function App() {
    return (
        <div>
            <Navbar/>
            <MDBRow className={'mt-5'}>
                <MDBCol xs={12} sm={12} md={10} lg={8} xl={8} className={'offset-md-1 offset-lg-2 offset-xl-2 p-0'}>
                    <Store>
                        <Home/>
                    </Store>
                </MDBCol>
            </MDBRow>
        </div>
  );
}

export default App;
