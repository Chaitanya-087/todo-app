const TodoReducer = (todos,action) => {
    const {type,payload} = action
    switch(type) {
        case 'ADD_TODO':
            return [...todos,payload]
        case 'DELETE_TODO':
            return todos.filter((todo)=>todo.id !== payload)
        case 'EDIT_ENABLE':
            return todos.map((todo) => {
                    if (todo.id === payload){
                       return {...todo,edit:true}
                    }
                    else return todo
                }
            )
        case 'UPDATE_TODO':
            return todos.map((todo) => {
                if (todo.id === payload.id) return{...todo,edit:false,data:payload.data,time:Date.now()}
                else return todo
            })
        case 'SORT_TODOS':
            return todos.sort((a,b) => b.time - a.time)
        case 'RESET':
            return []
            
        default:
            return new Error('😡asshole use correct action😤') 
    }
}

export default TodoReducer