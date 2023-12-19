//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import { FaClock } from "react-icons/fa";



// include your styles into the webpack bundle
import "../styles/index.css";

export const SimpleCounter = (props) => {
  console.log(props)
  return (
    
    <div className="vh-100 container d-flex flex-column justify-content-center">
      <div className="row">
          <div className="col bg-dark text-light p-3 rounded-2 fw-bold border border-light display-2">
          <FaClock />
          </div>
          <div className="col bg-dark text-light p-3 rounded-2 fw-bold border border-light display-2">
            {props.digitoSeis}
          </div>
          <div className=" col bg-dark text-light p-3 rounded-2 fw-bold border border-light display-2">
            {props.digitoCinco}
          </div>
          <div className=" col bg-dark text-light p-3 rounded-2 fw-bold border border-light display-2">
            {props.digitoCuatro}
          </div>
          <div className=" col bg-dark text-light p-3 rounded-2 fw-bold border border-light display-2">
            {props.digitoTres}
          </div>
          <div className=" col bg-dark text-light p-3 rounded-2 fw-bold border border-light display-2">
            {props.digitoDos}
          </div>
          <div className=" col bg-dark text-light p-3 rounded-2 fw-bold border border-light display-2">
            {props.digitoUno}
          </div>
      </div>
    </div>

  

  )
}


let counter = 0
setInterval(() => {
  counter += 1
  const digitoUno = Math.floor((counter / 1) % 10 );
  const digitoDos = Math.floor((counter / 10) % 10 );
  const digitoTres = Math.floor((counter / 100) % 10 );
  const digitoCuatro = Math.floor((counter / 1000) % 10 );
  const digitoCinco = Math.floor((counter / 10000) % 10 );
  const digitoSeis = Math.floor((counter / 100000) % 10 );
  
  ReactDOM.render(<SimpleCounter digitoUno={digitoUno} digitoDos={digitoDos} digitoTres={digitoTres} digitoCuatro={digitoCuatro} digitoCinco={digitoCinco} digitoSeis={digitoSeis} />, document.querySelector("#app"));

}, 10 )

