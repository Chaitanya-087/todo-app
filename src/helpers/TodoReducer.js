const TodoReducer = (todos,action) => {
    const {type,payload} = action
    switch(type) {
        case 'ADD_TODO':
            return [...todos,payload.newTodo]
        case 'DELETE_TODO':
            return todos.filter((todo)=>todo.id !== payload.id)
        case 'EDIT_ENABLE':
            return todos.map((todo) => {
                    if (todo.id === payload.id){
                       return {...todo,edit:!todo.edit}
                    }
                    else return todo
                }
            )
        case 'UPDATE_TODO':
            return todos.map((todo) => {
                if (todo.id === payload.id) return{...todo,edit:!todo.edit,data:payload.data,time:Date.now()}
                else return todo
            })
        case 'SORT_TODOS':
            todos.sort((a,b) => b.time - a.time)
            return [...todos]
        case 'RESET':
            return []
            
        default:
            return new Error('😡asshole use correct action😤') 
    }
}

export default TodoReducer