import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext()

export const CalculatorProvider = ({ children }) => {
    const [list, setList] = useState([0])
    const [result, setResult] = useState('')

    const addNumbers = (n) => {
        setList([...list, n])
    }

    const sum = (list) => {
        const resultSum = list.reduce((a, b) => a + b)
        setResult(resultSum)
        return result
    }

    const reset = () => {
        setList([0])
        setResult('')
    }

    return (
        <CalculatorContext.Provider
            value={{ list, addNumbers, result, sum, reset }}>
            {children}
        </CalculatorContext.Provider>
    )
}

export const useCalculator = () => {
    const context = useContext(CalculatorContext)
    return context
}