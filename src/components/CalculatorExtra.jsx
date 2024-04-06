import { useCalculator } from "./CalculatorProvider"
import { Link } from "react-router-dom"

function CalculatorExtra() {
    const { digits, addDigits, addend, plus } = useCalculator()
    return (
        <section className='extra'>
            <h2>Calculadora extra</h2>
            <div className='screen'>
                {digits.join('')}
            </div>
            <div className='screen'>
                {addend.join('+')}
            </div>
            <div className="calculator">
                <div className='buttons'>
                    <button onClick={() => addDigits(1)}>1</button>
                    <button onClick={() => addDigits(2)}>2</button>
                    <button onClick={() => addDigits(3)}>3</button>
                    <button onClick={() => addDigits(4)}>4</button>
                    <button onClick={() => addDigits(5)}>5</button>
                    <button onClick={() => addDigits(6)}>6</button>
                    <button onClick={() => addDigits(7)}>7</button>
                    <button onClick={() => addDigits(8)}>8</button>
                    <button onClick={() => addDigits(9)}>9</button>
                    <button onClick={() => addDigits(0)}>0</button>
                    <button onClick={() => addDigits('.')}>,</button>
                    <button onClick={plus}>+</button>
                </div>
                    <button onClick={plus}>=</button>
            </div>

            <Link to='/result'>Resultado</Link>
        </section>
    )
}

export default CalculatorExtra