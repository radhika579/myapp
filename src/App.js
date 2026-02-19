import './App.css';
import React, { useState } from 'react';

function App() {
  const [expr, setExpr] = useState('');
  const [error, setError] = useState('');
  const add = (v) => {
    if (error) setError('');
    setExpr((s) => s + v);
  };
  const clear = () => {
    setExpr('');
    setError('');
  };
  const back = () => {
    setExpr((s) => s.slice(0, -1));
  };
  const equals = () => {
    try {
      const fn = Function('return (' + expr + ')');
      const res = fn();
      setExpr(String(res));
      setError('');
    } catch (e) {
      setError('Error');
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="calculator">
          <div className="display" data-testid="display">{error || expr || '0'}</div>
          <div className="buttons">
            <button className="btn wide" onClick={clear}>C</button>
            <button className="btn" onClick={back}>⌫</button>
            <button className="btn" onClick={() => add('/')}>÷</button>
            <button className="btn" onClick={() => add('7')}>7</button>
            <button className="btn" onClick={() => add('8')}>8</button>
            <button className="btn" onClick={() => add('9')}>9</button>
            <button className="btn" onClick={() => add('*')}>×</button>
            <button className="btn" onClick={() => add('4')}>4</button>
            <button className="btn" onClick={() => add('5')}>5</button>
            <button className="btn" onClick={() => add('6')}>6</button>
            <button className="btn" onClick={() => add('-')}>−</button>
            <button className="btn" onClick={() => add('1')}>1</button>
            <button className="btn" onClick={() => add('2')}>2</button>
            <button className="btn" onClick={() => add('3')}>3</button>
            <button className="btn" onClick={() => add('+')}>+</button>
            <button className="btn zero" onClick={() => add('0')}>0</button>
            <button className="btn" onClick={() => add('.')}>.</button>
            <button className="btn equals" onClick={equals}>=</button>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
