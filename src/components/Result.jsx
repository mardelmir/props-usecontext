import { useCalculator } from "./CalculatorProvider"
import { Link } from "react-router-dom"

function Result() {
    const { sum, list, reset, result } = useCalculator()
    const key = Math.floor(Math.random() * 50)
    const finalResult = sum(list)

    return (
        <>
            <h2>Resultado: {finalResult}</h2>
            <div>
                <h3>Lista de número seleccionados:</h3>
                <ul>
                    {list.map(num => <li key={key + num + result}>{num}</li>)}
                </ul>
            </div>
            <button onClick={reset}>Reset</button>
            <Link to='/'>Volver</Link>
        </>
    )
}

export default Result