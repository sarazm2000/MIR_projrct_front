import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="text-container">
        گوگولی (GOOGLE)
      </div>
      <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center"></div>
        <InputGroup className="col-6">
          <FormControl id="search-bar"
            placeholder="جست‌وجو"
            aria-label="Search"
            aria-describedby="basic-addon2"
          /> 
          
          
        </InputGroup>
        <Button variant="outline-secondary" id="button-addon2">
            بجو!
        </Button>
        
        <Button variant="outline-secondary" id="button-addon2">
            بجو!
        </Button>
      </div>
    </div>
  );
}

export default App;
