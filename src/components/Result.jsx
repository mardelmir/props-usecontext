import { useCalculator } from "./CalculatorProvider"
import { Link } from "react-router-dom"

function Result() {
    const { sum, list, reset } = useCalculator()
    // const key = Math.floor(Math.random() * 50)
    const finalResult = sum(list)

    return (
        <>
            <h2>Resultado: {finalResult}</h2>
            <div>
                <h3>Lista de número seleccionados:</h3>
                <ul>
                    {list.length === 0
                        ? 'Ningún número seleccionado'
                        : list.map((num, index) => <li key={index}>{num}</li>)}
                </ul>
            </div>
            <button className='resetBtn' onClick={reset}>Reset</button>
            <Link to='/'>Volver</Link>
        </>
    )
}

export default Result