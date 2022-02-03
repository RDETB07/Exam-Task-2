import './App.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useEffect, useState } from 'react';

function App() {

  const [numberOne, setNumberOne] = useState('')
  const [numberTwo, setNumberTwo] = useState('')
  const [numberThree, setNumberThree] = useState('')
  const [sumNumbers, setSumNumbers] = useState('');
  const [threeNumbers, setThreeNumbers] = useState([])

  const sumFunction = (e, a, b, c) => {
    e.preventDefault()
    setThreeNumbers([a, b, c])
  }

  const resetNumbers = (e) => {
    e.preventDefault()

    setThreeNumbers([])
    setNumberOne('')
    setNumberTwo('')
    setNumberThree('')
    setSumNumbers('')
  }

  useEffect(() => {
    if ((threeNumbers[0] !== undefined && threeNumbers[0] !== '') &&
      (threeNumbers[1] !== undefined && threeNumbers[1] !== '') &&
      (threeNumbers[2] !== undefined && threeNumbers[2] !== '')) {
      let sum = parseInt(threeNumbers[0]) + parseInt(threeNumbers[1]) + parseInt(threeNumbers[2])
      setSumNumbers(sum)
    }
  }, [threeNumbers, numberOne, numberTwo, numberThree, sumNumbers])

  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col className="col-12 d-flex justify-content-center mt-5">
            <h1>Please input 3 numbers</h1>
          </Col>
        </Row>
        <Form onSubmit={(e) => { sumFunction(e, numberOne, numberTwo, numberThree) }}>
          <Row>
            <Col className="col-12 d-flex justify-content-center mt-5">
              {
                (threeNumbers[0] !== undefined && threeNumbers[0] !== null && threeNumbers[0] !== '') ?
                  <h5 className="mx-5">First Number: {numberOne}</h5>
                  :
                  <Form.Group className="mb-3" controlId="numberOne">
                    <Form.Label>First Number</Form.Label>
                    <Form.Control
                      type="number"
                      value={numberOne}
                      onChange={(e) => setNumberOne(e.target.value)}
                      placeholder="Input number 1"
                    />
                  </Form.Group>
              }

              {
                (threeNumbers[1] !== undefined && threeNumbers[1] !== null && threeNumbers[1] !== '') ?
                  <h5 className="mx-5">Second Number: {numberTwo}</h5>
                  :
                  <Form.Group className="mb-3" controlId="numberTwo">
                    <Form.Label>Second Number</Form.Label>
                    <Form.Control
                      type="number"
                      value={numberTwo}
                      onChange={(e) => setNumberTwo(e.target.value)}
                      placeholder="Input number 2"
                    />
                  </Form.Group>
              }

              {
                (threeNumbers[2] !== undefined && threeNumbers[2] !== null && threeNumbers[2] !== '') ?
                  <h5 className="mx-5">Third Number: {numberThree}</h5>
                  :
                  <Form.Group className="mb-3" controlId="numberThree">
                    <Form.Label>Third Number</Form.Label>
                    <Form.Control
                      type="number"
                      value={numberThree}
                      onChange={(e) => setNumberThree(e.target.value)}
                      placeholder="Input number 3"
                    />
                  </Form.Group>
              }




            </Col>

            <Col className="col-12 d-flex justify-content-center mt-5">
              <h5>Sum of the three numbers: {sumNumbers}</h5>
            </Col>

            <Col className="col-12 d-flex justify-content-center mt-5">
              <Button className="mx-5" variant="primary" type="submit" id="submitBtn">
                Get Sum
              </Button>
              <Button className="mx-5" variant="danger" onClick={e => resetNumbers(e)}>
                Reset
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>


    </Fragment >
  );
}

export default App;
