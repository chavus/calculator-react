import { useState } from 'react'
import logo from './logo.svg';
import './App.scss';
import { Container,
         Row,
         Col,
         Input,
         Form, FormGroup, Label,
         Button } from 'reactstrap';


function App() {
  const [ total, setTotal] = useState(0)
  const [ tipPercent, setTipPercent ] = useState(0)
  const [ qtyPerson, setQtyPerson ] = useState(1)
  const [ resultValues, setResultValues] = useState({ tipPerPerson:0, totalPerPerson:0 })

  function handleInputTotal(event){
    let total = event.target.value
    setTotal(total)
  }

  function handleInputQtyPerson(event){
    let qtyPerson = event.target.value
    setQtyPerson(qtyPerson)
  }

  function handleTipInput(event){
    let rawTip = event.target.dataset.tip ? event.target.dataset.tip : (event.target.value)/100
    const tip = Number(rawTip)
    console.log(total, qtyPerson)
    console.log(tip)
    let tipPerPerson = total*tip/qtyPerson
    let totalPerPerson = total/qtyPerson + tipPerPerson
    setResultValues({ tipPerPerson, totalPerPerson })

  }

  return (
    <div className="fluid-container d-flex align-items-center vh-100">
      <Container className="inner-container bg-white vh-50">
        <Row className="p-3 ">
          <Col xs="12" md="6">
            <Form>
              <FormGroup>
                <Label for="billInput">Bill</Label>
                <Input type="text" name="total" id="billInput" placeholder="with a placeholder" onChange={ handleInputTotal}/>    
                </FormGroup>        
              </Form>
              <div>
                Select Tip %
              </div>
              <div>
                <div>
                  <Button data-tip=".05" data-dewendy onClick={ handleTipInput }>5%</Button>
                  <Button data-tip=".1" onClick={ handleTipInput }>10%</Button>
                  <Button data-tip=".15" onClick={ handleTipInput }>15%</Button>
                  <Button data-tip=".25" onClick={ handleTipInput }>25%</Button>
                  <Button data-tip=".5" onClick={ handleTipInput }>50%</Button>
                  <Input placeholder="Custom" onBlur={ handleTipInput }></Input>
                </div>
              </div>
              <Form>
              <FormGroup>
                <Label for="peopleInput">Bill</Label>
                <Input type="text" name="qtyPerson" id="peopleInput" placeholder="with a placeholder" onChange={ handleInputQtyPerson }/>    
                </FormGroup>        
              </Form>
          </Col>
          <Col xs="12" md="6" className="results-column mt-3 mt-md-0 text-light">
            <div className="d-flex justify-content-between">
              <div>
                <div>Tip Amount</div>
                <span>/ person</span>
              </div>
              <div>
                <h1>$ { resultValues.tipPerPerson }</h1>
              </div>
            </div>
            <div className="d-flex justify-content-between ">
              <div>
                <div>Total</div>
                <span>/ person</span>
              </div>
              <div>
                <h1>$ { resultValues.totalPerPerson }</h1>
              </div>
            </div>
            <Button>Reset</Button>
          </Col>
        </Row>
      </Container>
    </div>
      
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
