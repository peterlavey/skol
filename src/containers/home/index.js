import React, {useContext} from 'react';
import Search from "../../components/search";
import Beers from "../../components/beers";
import {Context} from "../../store";
import {MDBCol, MDBRow} from "mdbreact";
import useWindowSize from "../../hooks/useWindowSize";

const Home = ()=> {
    const [state] = useContext(Context);
    const size = useWindowSize();
    const numCols = {
        xs: 1,
        sm: 1,
        md: 1,
        lg: 3,
        xl: 3
    };

    return (
        <MDBRow>
            <MDBCol md={12}>
                <Search actionDispatcher={'changeSearch'}/>
            </MDBCol>

            <MDBCol md={12}>
                <Beers beers={state.beersFiltered} numCols={numCols[size.type]}/>
            </MDBCol>
        </MDBRow>
    );
};

export default Home;