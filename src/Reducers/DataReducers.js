const initialState = {
    data: []
}

export const DataReduce = (state = initialState, action) => {
    switch (action.type) {
        case "INSERT_DATA":
            return {
                ...state.data,
                data: [...state.data, action.payload]
            };
        case "REMOVE_DATA":
            console.log("remove", action.payload)
            return {
                ...state.data,
                data: state.data.filter((item, index) => index !== action.payload)
            };
        case "UPDATE_DATA":
            return{
                ...state.data,
                data: state.data.filter((item, index) => index !== action.payload)
            }
        default:
            return state
    }
}