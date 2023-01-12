import { ActionType } from "./ActionType"

export const storeData = (payload) => {
    return {
        type: "INSERT_DATA",
        payload,
    }
}

export const removeData = (index) => {
    return {
        type: "REMOVE_DATA",
        payload: index,
    }
}

export const updateData = (index) => {
    return {
        type: "UPDATE_DATA",
        
        payload: index,
    }
}