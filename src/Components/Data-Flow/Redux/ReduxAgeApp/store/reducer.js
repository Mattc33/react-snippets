const initialState = {
    age: 21
}

const reducer = (state = initialState, action) => {
    const newState = {...state}

    if (action.type === 'AGE_UP') {
        newState.age++
    }
    else if (action.type === 'AGE_DOWN') {
        newState.age--
    }

    return newState
}

export default reducer