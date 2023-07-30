import React from "react";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from 'react';


export default function listView() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  function onTick() {
	setCount(count + increment);
  }

  useEffect(() => {
    const id = setInterval(onTick, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div
        className="container d-flex justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="row align-items-center">
          <div className="col  ">
            <h1 className="text-center text-white">React Web</h1>
            <h2 className="text-center">0</h2>
            <div className="text-center">
              <Button variant="danger" className="mx-1 px-3 border">
                Decrement
              </Button>
              <Button variant="success" className="mx-1 px-3 border" disabled={increment === 0} onClick={() => {
          setIncrement(i => i - 1);
        }}>
                Increment
              </Button>
            </div>
            <div className="text-center">
              <Button variant="warning" className="my-3 px-3 border" onClick={() => setCount(0)}>
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
