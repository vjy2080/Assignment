import React from 'react';
import './Loader.css';

function BikeLoader() {
    return (
        <div className="container">
            <div className="row">
                <div className="body">
                    <div className="center">
                        <div id="loop" className="center"></div>
                        <div id="bike-wrapper" className="center">
                            <div id="bike" className="centerBike"></div>
                        </div>
                    </div>
                </div>
            </div></div>
    );
}

export default BikeLoader;
