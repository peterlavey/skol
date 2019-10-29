import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange(e){
    }

    render() {
        return(
            <form className="form-inline md-form form-sm justify-content-center">
                <i className="fas fa-search" aria-hidden="true"/>
                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" onChange={(e)=> this.handleChange(e)}/>
            </form>
        );
    }
}

export default Search;