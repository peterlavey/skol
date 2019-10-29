import React, {useContext} from 'react';
import Search from "../../components/search";
import Beers from "../../components/beers";
import {Context} from "../../store";

const Home = ()=> {
    const [state] = useContext(Context);

    return (
        <div>
            <Search actionDispatcher={'changeSearch'}/>
            <Beers beers={state.beersFiltered} numCols={3}/>
        </div>
    );
};

export default Home;