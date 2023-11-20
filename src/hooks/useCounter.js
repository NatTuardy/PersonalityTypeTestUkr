import React, { useContext, useState } from 'react'

const CounterContex = React.createContext()

export const useCounter = () => { 
  return useContext(CounterContex)
}

const initialState = {
  index: 0,

}

const CounterState = {
  d: 0,
  i: 0,
  c:0,
  s:0,
}



export const CounterProvider = ({children}) => {
  const [index, setIndex] = useState(initialState.index)

  const [counter, setCounter] = useState(CounterState) 


  return <CounterContex.Provider value={{index, setIndex, counter, setCounter}}>
    {children}
  </CounterContex.Provider>
}