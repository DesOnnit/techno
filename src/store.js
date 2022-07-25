import { createStore } from "redux"
const defaultState = {
    invest: false,
    call: false
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "invest_open":
            return { ...state, invest: true }
        case "invest_close":
            return { ...state, invest: false }
        case "call_open":
            return { ...state, call: true }
        case "call_close":
            return { ...state, call: false }
        default:
            return state
    }
}
export const store = createStore(reducer)
