import React,{createContext, useReducer} from 'react'
import TodoReducer from './TodoReducer'

const initialState = []
const TodoContext = createContext()

const TodoProvider = ({children}) =>{
    const [state,dispatch] = useReducer(TodoReducer,initialState) 
    

    return <TodoContext.Provider value={{msg:'ass'}} > {children} </TodoContext.Provider>
}