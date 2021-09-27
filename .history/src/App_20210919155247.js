import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from "react-bootstrap"

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todos</h1>

      <Form.Group>
        <Form.Control type="text"></Form.Control>
        <Button type="submit">Add</Button>
      </Form.Group>
    </div>
  );
}

export default App;
