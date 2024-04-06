import { useCalculator } from "./CalculatorProvider"
import { Link } from "react-router-dom"

function Calculator() {
    const { list, addNumbers, sum } = useCalculator()

    return (
        <>
            <div>
                {list.at(-1)}
            </div>
            <div>
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
            <Link to='/result'>Resultado</Link>
        </>
    )
}

export default Calculator