import React,{useState} from 'react'

import {TestinomialContainer} from "./styled"

import {useSelector,useDispatch} from "react-redux"

function Testinimial() {
    const [x, setX] = useState(0);

    const testinomials = useSelector(state => state.testinomials)

    function goLeft() {
      x === 0 ? setX(-100 * (testinomials.length - 1)) : setX(x + 100);
    }

    function goRight() {
      x === -100 * (testinomials.length - 1) ? setX(0) : setX(x - 100);
    }
    
    return (
      <TestinomialContainer>
        <h2>This Is Why We Do What We Do.</h2>
        <div className="slider">
          {testinomials.map((testinomial, index) => {
            return (
              <div
                key={index}
                className="slide"
                style={{ transform: `translateX(${x}%)` }}
              >
                <img
                  src={testinomial.img}
                  alt={testinomial.comment}
                  loading="lazy"
                />
              </div>
            );
          })}
          <p
            className="navigation right"
            onClick={goRight}
            style={{ right: "0px", fontWeight: "800" }}
          >
            <button style={{ marginLeft: "auto" }}>{">"}</button>
          </p>
          <p
            className="navigation left"
            onClick={goLeft}
            style={{ left: "0px", fontWeight: "800" }}
          >
            <button>{"<"}</button>
          </p>
        </div>
      </TestinomialContainer>
    );
}

export default Testinimial
