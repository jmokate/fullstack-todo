import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from "react-bootstrap"

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todos</h1>

      <Form.Group>
        <Form.Control type="text"></Form.Control>
      </Form.Group>
    </div>
  );
}

export default App;
