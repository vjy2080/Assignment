import React, { useState } from "react";

function ExampleOfuseState() {
    const [count, setRandomCount] =
        useState(function generateRandomInteger() {
            return Math.floor(Math.random() * 1000000);
        });
    function clickHandler() {
        setRandomCount(Math.floor(Math.random() * 1000000));
    }
    return (
        <div className="text-center">
            <h1> {count} </h1>

            <p> Click below button to generate random number </p>
            <p>
                <button className="btn btn-primary" onClick={clickHandler}> Click Here</button>
            </p>


        </div>
    );
}

export default ExampleOfuseState;