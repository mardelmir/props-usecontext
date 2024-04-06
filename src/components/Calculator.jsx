import CalculatorExtra from "./CalculatorExtra"
import { useCalculator } from "./CalculatorProvider"
import { Link } from "react-router-dom"


function Calculator() {
    const { list, addNumbers, sum } = useCalculator()

    return (
        <div className='type'>
            <section className='basic'>
                <h2>Calculadora básica</h2>
                <div className='screen'>
                    {list.at(-1)}
                </div>
                <div className="calculator">
                    <div className='buttons'>
                        <button onClick={() => { addNumbers(1), sum(list) }}>1</button>
                        <button onClick={() => { addNumbers(2), sum(list) }}>2</button>
                        <button onClick={() => { addNumbers(3), sum(list) }}>3</button>
                        <button onClick={() => { addNumbers(4), sum(list) }}>4</button>
                        <button onClick={() => { addNumbers(5), sum(list) }}>5</button>
                        <button onClick={() => { addNumbers(6), sum(list) }}>6</button>
                        <button onClick={() => { addNumbers(7), sum(list) }}>7</button>
                        <button onClick={() => { addNumbers(8), sum(list) }}>8</button>
                        <button onClick={() => { addNumbers(9), sum(list) }}>9</button>
                    </div>
                </div>

                <Link to='/result'>Resultado</Link>
            </section>
            <CalculatorExtra />
        </div>
    )
}

export default Calculator