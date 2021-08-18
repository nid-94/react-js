import './App.css';
import { Button,ButtonGroup } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Choose the language you wish to Learn</h2>
        <br />
      <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label class="form-check-label" for="flexCheckDefault">
      HTML
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    CSS
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    JS
  </label>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">other</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<ButtonGroup aria-label="Basic example">
  <Button variant="primary" >Submit</Button>
  <Button variant="info">cancel</Button>
</ButtonGroup>

</header>
    </div>
  );
}

export default App;
