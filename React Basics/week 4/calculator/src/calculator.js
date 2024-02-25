import React, { useState, useEffect, useRef } from 'react';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const inputRef = useRef(null);

  const handleClick = (value) => {
    switch (value) {
      case '=':
        try {
          const result = eval(displayValue); // Using eval for simplicity, consider other approaches for security
          setDisplayValue(String(result));
        } catch (error) {
          setDisplayValue('Error');
        }
        break;
      case 'AC':
        setDisplayValue('0');
        break;
      case 'DEL':
        setDisplayValue(prevValue => prevValue.slice(0, -1));
        break;
      case '+/-':
        setDisplayValue(prevValue => String(-Number(prevValue)));
        break;
      default:
        setDisplayValue(prevValue => prevValue === '0' ? value : prevValue + value);
    }
  };

  useEffect(() => {
    inputRef.current.value = displayValue;
  }, [displayValue]);

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" id="inputBox" ref={inputRef} value="" disabled />
      </div>
      <div className="row">
        <button type="button" className="opr" onClick={() => handleClick('AC')}>AC</button>
        <button type="button" className="opr" onClick={() => handleClick('DEL')}>DEL</button>
        <button type="button" className="opr" onClick={() => handleClick('%')}>%</button>
        <button type="button" className="opr" onClick={() => handleClick('/')}>/</button>
      </div>
      <div className="row">
        {[7, 8, 9, '*'].map(num => (
          <button key={num} type="button" onClick={() => handleClick(String(num))}>{num}</button>
        ))}
      </div>
      <div className="row">
        {[4, 5, 6, '+'].map(num => (
          <button key={num} type="button" onClick={() => handleClick(String(num))}>{num}</button>
        ))}
      </div>
      <div className="row">
        {[1, 2, 3, '-'].map(num => (
          <button key={num} type="button" onClick={() => handleClick(String(num))}>{num}</button>
        ))}
      </div>
      <div className="row">
        <button type="button" id="plusMinus" onClick={() => handleClick('+/-')}>+/-</button>
        <button type="button" onClick={() => handleClick('0')}>0</button>
        <button type="button" onClick={() => handleClick('.')}>.</button>
        <button type="button" id="eqBtn" onClick={() => handleClick('=')}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
