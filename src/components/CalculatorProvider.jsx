import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext()

export const CalculatorProvider = ({ children }) => {
    const [list, setList] = useState([])

    // Funciones que pedía el challenge
    const addNumbers = (n) => setList([...list, n])
    const sum = (list) => list.length === 0 ? null : list.reduce((a, b) => a + b)
    const reset = () => setList([])

    // Funciones extra
    const [digits, setDigits] = useState([])
    const [addend, setAddend] = useState([])

    const addDigits = (d) => setDigits([...digits, d])// función de actualización, useState ASÍNCRONA
        
    const plus = () => {
        const fullNum = +digits.join('')
        setAddend(a => [...a, fullNum])
        setDigits([])
    }


    return (
        <CalculatorContext.Provider
            value={{ list, addNumbers, sum, reset, digits, addDigits, addend, plus }}>
            {children}
        </CalculatorContext.Provider>
    )
}

export const useCalculator = () => {
    const context = useContext(CalculatorContext)
    return context
}