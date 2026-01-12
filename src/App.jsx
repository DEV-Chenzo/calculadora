import React, { useState } from 'react';
import './styles/reset.css';
import MainContainer from './components/container/MainContainer';
import GridContainer from './components/container/GridContainer';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  const calculate = (v1, v2, op) => {
    const n1 = Number(v1);
    const n2 = Number(v2);
    switch (op) {
      case '+':
        return String(n1 + n2);
      case '-':
        return String(n1 - n2);
      case '*':
        return String(n1 * n2);
      case '/':
        return n2 !== 0 ? String(n1 / n2) : '0';
      case '%':
        return n2 !== 0 ? String((n1 / 100) * n2) : 'Erro';
      default:
        return v2;
    }
  };
  // Valor atual do input
  const [element, setElement] = useState('');

  // Primeiro valor
  const [firstValue, setFirstValue] = useState('0');

  // Operação selecionada
  const [operation, setOperation] = useState(null);

  const handleOperation = (nextOperation) => {
    if (element === '') return;

    if (firstValue === '0') {
      setFirstValue(element);
      setElement('');
      setOperation(nextOperation);
    } else {
      const result = calculate(firstValue, element, operation);
      setFirstValue(result);
      setElement('');
      setOperation(nextOperation);
    }
  };

  // Pegam as operações matemáticas
  const handleSumNumbers = () => handleOperation('+');
  const handleSubNumbers = () => handleOperation('-');
  const handleMultNumbers = () => handleOperation('*');
  const handleDivNumbers = () => handleOperation('/');
  const handlePercent = () => handleOperation('%');

  const [isFinished, setIsFinished] = useState(false);
  const handleEquals = () => {
    if (firstValue !== '0' && operation && element !== '') {
      const result = calculate(firstValue, element, operation);
      setElement(result);
      setFirstValue('0');
      setOperation(null);
      setIsFinished(true);
    }
  };

  const handleClick = (label) => {
    setElement((prev) => {
      if (isFinished) {
        setIsFinished(false);
        return label;
      }
      return `${prev}${label}`;
    });
  };
  const handleClear = () => {
    setElement('');
    setFirstValue('0');
    setOperation(null);
  };

  const handleAddDot = () => {
    if (!element.includes('.')) {
      setElement((prev) => (prev === '' ? '0.' : `${prev}.`));
    }
  };

  const handleReverseSign = () => {
    setElement((prev) => {
      if (prev === '' || prev === '0') return prev;
      return String(Number(prev) * -1);
    });
  };

  const displayValue = () => {
    if (!operation) return element;
    return `${firstValue} ${operation} ${element}`;
  };

  return (
    <>
      <h1>Minha Calculadora</h1>

      <MainContainer>
        <Input type="text" placeholder="0" disabled value={displayValue()} />
        <GridContainer>
          <Button label="AC" variant="gray" onClick={handleClear} />
          <Button label="±" variant="gray" onClick={handleReverseSign} />
          <Button label="%" variant="gray" onClick={handlePercent} />
          <Button label="÷" variant="orange" onClick={handleDivNumbers} />
          <Button label="7" onClick={() => handleClick('7')} />
          <Button label="8" onClick={() => handleClick('8')} />
          <Button label="9" onClick={() => handleClick('9')} />
          <Button label="*" variant="orange" onClick={handleMultNumbers} />
          <Button label="4" onClick={() => handleClick('4')} />
          <Button label="5" onClick={() => handleClick('5')} />
          <Button label="6" onClick={() => handleClick('6')} />
          <Button label="-" variant="orange" onClick={handleSubNumbers} />
          <Button label="1" onClick={() => handleClick('1')} />
          <Button label="2" onClick={() => handleClick('2')} />
          <Button label="3" onClick={() => handleClick('3')} />
          <Button label="+" variant="orange" onClick={handleSumNumbers} />
          <Button label="0" double onClick={() => handleClick('0')} />
          <Button label="." onClick={handleAddDot} />
          <Button label="=" variant="orange" onClick={handleEquals} />
        </GridContainer>
      </MainContainer>
    </>
  );
}

export default App;
