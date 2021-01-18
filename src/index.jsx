import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function HelloWorld() {
  return(
    <div className="container">
      <div className="jumbotron">
        <h1>Hello gamer</h1>
        <p>WAAAA</p>
      </div>
    </div>
  );
}
ReactDOM.render(
  <div>
    <HelloWorld/>
  </div>,
  document.getElementById('root')
);