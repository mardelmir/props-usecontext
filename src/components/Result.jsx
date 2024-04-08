import { useCalculator } from "./CalculatorProvider"
import { Link } from "react-router-dom"

function Result() {
    const { list, sum, reset, addend } = useCalculator()
    const listResult = sum(list)
    const addendResult = sum(addend)

    return (
        <>
            <h2>Resultado: {list.length === 0 && addend.length === 0
                ? 0
                : list.length !== 0
                    ? listResult
                    : addendResult}</h2>
            <div>
                <h3>Lista de número seleccionados:</h3>
                <ul>
                    {list.length === 0 && addend.length === 0
                        ? 'Ningún número seleccionado'
                        : list.length !== 0
                            ? list.map((num, index) => <li key={index}>{num}</li>)
                            : addend.map((num, index) => <li key={index}>{num}</li>)}
                </ul>
            </div>
            <button className='resetBtn' onClick={reset}>Reset</button>
            <Link to='/'>Volver</Link>
        </>
    )
}

export default Result