import { createContext, useContext, useState } from "react";

const CountContext = createContext(null);

const CounterProvider = (props) => {
    console.log(props);
    const [count, setCount] = useState(0);
    return <CountContext.Provider value={ [count, setCount] } { ...props }></CountContext.Provider>
}

const useCounter = () => {
    const context = useContext(CountContext);
    return context;
}

export { CounterProvider, useCounter }

// const CountContext = createContext(null);

// const CounterProvider = props => {
//     const [count, setCount] = useState(0);
//     return <CountContext.Provider value={ [count, setCount] } { ...props } ></CountContext.Provider>
// }

// const useCount = () => {
//     const context = useContext(CountContext);
//     return context;
// }

// export { CounterProvider, useCount }
