import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function ListView() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  {
    document.body.style.backgroundColor = "royalblue";
  }

  return (
    <>
      <div
        className="container d-flex justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="row align-items-center">
          <div className="col  ">
            <h1 className="text-center text-white">React Web</h1>
            <h2 className="text-center my-5 fs-1">{count}</h2>
            <div className="text-center">
              <Button
                variant="danger"
                className="mx-3 px-3 border"
                onClick={decrement}
              >
                Decrement
              </Button>
              <Button
                variant="success"
                className="mx-3 px-3 border"
                onClick={increment}
              >
                Increment
              </Button>
            </div>
            <div className="text-center">
              <Button
                variant="secondary"
                className="my-5 px-3 border"
                onClick={reset}
                disabled={count === 0}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
