import React, {useContext} from 'react';
import {Context} from "../../store";

const Search = ({actionDispatcher})=> {
    const [state, dispatch] = useContext(Context);

    return (
        <form className="form-inline md-form form-sm justify-content-center">
            <i className="fas fa-search" aria-hidden="true"/>
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" onChange={e => dispatch({type: actionDispatcher, payload: e.target.value})}/>
        </form>
    );
};

export default Search;