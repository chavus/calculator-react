import { useState, useEffect } from 'react'
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
      // let tipPerPerson = total*tip/qtyPerson
      // let totalPerPerson = total/qtyPerson + tipPerPerson
      // setResultValues({ tipPerPerson, totalPerPerson })
    setTipPercent(tip)
  }

  useEffect(()=>{
    let tipPerPerson = total*tipPercent/qtyPerson
    let totalPerPerson = total/qtyPerson + tipPerPerson
    setResultValues({ tipPerPerson, totalPerPerson })
  })

  return(
    <>
      <Container>

        <Row>
          <Col xs="12" md="6"  className="logo">
            <img src="../images/logo.svg" alt="logo" />
          </Col>
        </Row>

        <Row className="card">
          {/* input */}
          <Col className="input">
            <div className="bill-container">
                <div className="label-wrapper">
                  <label htmlFor="billInput">Bill</label>
                </div>

                <div className="inp-wrapper">
                  <input className="inp-text" type="text" name="total" id="billInput" placeholder="0.0" onChange={ handleInputTotal}/>
                  <img src="../images/icon-dollar.svg" alt="dollar-icon" />
                </div>
            </div>

            <div className="tip-container">
                <div className="label-wrapper">
                  <label htmlFor="inp-tip">Select Tip %</label>
                </div>

                <div className="btn-wrapper">
                  <Button className="btn" active={tipPercent==.05} data-tip=".05" data-dewendy onClick={ handleTipInput }>5%</Button>
                  <Button className="btn" data-tip=".1" onClick={ handleTipInput }>10%</Button>
                  <Button className="btn" data-tip=".15" onClick={ handleTipInput }>15%</Button>
                  <Button className="btn" data-tip=".25" onClick={ handleTipInput }>25%</Button>
                  <Button className="btn" data-tip=".5" onClick={ handleTipInput }>50%</Button>
                  <input className="inp-text" type="text" name="inp-tip" id="inp-tip" placeholder="Custom" onBlur={ handleTipInput }/>
                </div>
            </div>

            <div className="people-container">
                <div className="label-wrapper">
                    <label htmlFor="inp-people">Number of People</label>
                    
                </div>

                <div className="inp-wrapper">
                  <input className="inp-text" type="text" name="inp-people" id="inp-people" defaultValue={1} onBlur={ handleInputQtyPerson }/>
                  <img src="../images/icon-person.svg" alt="person-icon" />
                </div>
                
            </div>
          </Col>

          {/* results */}
          <Col className="output">
            <div className="line-wrapper">
              <div className="line-output">
                <div className="tittle-wrapper">
                  <div className="title">Tip Amount</div>
                  <div className="desc">/ person</div>
                </div>
                <div className="value">${ resultValues.tipPerPerson }</div>
              </div>
              <div className="line-output">
                <div className="tittle-wrapper">
                  <div className="title">Total</div>
                  <div className="desc">/ person</div>
                </div>
                <div className="value">${ resultValues.totalPerPerson }</div>
              </div>
            </div>
            <div className="btn">Reset</div>
          </Col>
        </Row>

      </Container>
    </>
  )
  
}

export default App;
