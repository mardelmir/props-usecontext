import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CalculatorProvider } from './components/CalculatorProvider';
import Calculator from './components/Calculator';
import Result from './components/Result';
import { useCalculator } from './components/CalculatorProvider';

function App() {

  return (
    <CalculatorProvider>
      <Router>
        <h1>Calculadora</h1>
        <Routes>
          <Route path='/' element={<Calculator />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </Router>
    </CalculatorProvider>
  );
}

export default App;
