import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as math from 'mathjs';

const Calc = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
  
    const handleClick = (value) => {
      if (value === '=') {
        try {
          setResult(math.evaluate(input).toString());
        } catch (error) {
          setResult('Error');
        }
      } else if (value === 'C') {
        setInput('');
        setResult('');
      } else {
        setInput(input + value);
      }
    };
  
    return (
      <div>

        <h1 className='text-center p-2 text-warning'>Calculator App</h1>
      <div className='m-5 calculator-container'>
  
      <Container  className="calculator text-center px-2 py-5 bg-dark">
        <div className="display py-2 mx-0 bg-light">
          <div className="input text-center">{input}</div>
          <div className="result text-end p-1">{result}</div>
        </div>
        <Container className='py-3'>
        <Row vertical className="buttons">
          <Col sm={12}>
          <button className='btn btn-secondary' onClick={() => handleClick('7')}>7</button>
          <button className='btn btn-secondary'onClick={() => handleClick('8')}>8</button>
          <button className='btn btn-secondary'onClick={() => handleClick('9')}>9</button>
          <button className='btn btn-secondary'onClick={() => handleClick('/')}>/</button>
          </Col>
          <Col className='pt-1' sm={12}>
          <button className='btn btn-secondary'onClick={() => handleClick('4')}>4</button>
          <button className='btn btn-secondary'onClick={() => handleClick('5')}>5</button>
          <button className='btn btn-secondary'onClick={() => handleClick('6')}>6</button>
          <button className='btn btn-secondary'onClick={() => handleClick('*')}>x</button>
          </Col>
          <Col className='pt-1'sm={12}>
          <button className='btn btn-secondary' onClick={() => handleClick('1')}>1</button>
          <button className='btn btn-secondary' onClick={() => handleClick('2')}>2</button>
          <button className='btn btn-secondary' onClick={() => handleClick('3')}>3</button>
          <button className='btn btn-secondary' onClick={() => handleClick('-')}>-</button>
          </Col>
          <Col className='py-1' sm={12}>
          <button className='btn btn-secondary'onClick={() => handleClick('0')}>0</button>
          <button className='btn btn-secondary'onClick={() => handleClick('.')}>.</button>
          <button className='btn btn-secondary'onClick={() => handleClick('+')}>+</button>
          </Col>
          <Col sm={12} className='me-auto'>
          <button className='btn btn-warning'onClick={() => handleClick('C')}>C</button>
          <button className='btn btn-primary'onClick={() => handleClick('=')}>=</button>
          </Col>
        </Row>
      </Container>
      </Container>
      </div>
      </div>
    );
  };

  export default Calc;