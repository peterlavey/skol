import React from 'react';

const Beer = ({data})=> {
    return (
        <div className="card">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={data.image} className="card-img" alt={data.name}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">{data.brewery}</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Tipo: {data.type}</li>
                            <li className="list-group-item">IBU: {data.ibu}</li>
                            <li className="list-group-item">ABV: {data.abv}%</li>
                            <li className="list-group-item">SRM: {data.srm}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Beer;