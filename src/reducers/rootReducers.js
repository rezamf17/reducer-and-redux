export const initialValue = {
    user : "Anon",
    counter : 100000
}

export const useReducer = (state, action) => {
    if(action.type === 'increment'){
        return {
            ...state,
            counter : state.counter + 1
        }
    }else if(action.type === 'decrement'){
        return {
            ...state,
            counter : state.counter -1
        }
    }else if(action.type === 'incrementSpec'){
        return {
            ...state,
            counter : state.counter + action.payload
        }
    }else if(action.type === 'decrementSpec'){
        return{
            ...state,
            counter : state.counter - action.payload
        }
    }else if(action.type === 'reset'){
        return {
            ...state,
            counter : 0
        }
    }else {
        return state
    }
}