import { ACTIONS } from "./constants"
import { IAction, IAppState } from "./types"

const AppReducer = (state: IAppState, action: IAction) => {
    switch(action.type) {
        case ACTIONS.SET_ACTIVE_SEAT:
            return {
                ...state,
                activeSeat: action.payload
            }
        case ACTIONS.BOOK_SEAT:
            const passenger = action.payload;
            const bs = new Map(state.bookedSeats).set(passenger.seatNumber, passenger)
            window.localStorage.setItem("bookedSeats", JSON.stringify(Object.fromEntries(bs)))
            return {
                ...state,
                bookedSeats: bs
            }
        case ACTIONS.UNBOOK_SEAT:
            const seatIdToRemove  = action.payload;
            const updatedSeats = new Map(state.bookedSeats);
            updatedSeats.delete(seatIdToRemove);
            window.localStorage.setItem("bookedSeats", JSON.stringify(Object.fromEntries(updatedSeats)))
            return {
                ...state,
                bookedSeats: updatedSeats
            }
        case ACTIONS.SET_PASSENGER_FORM_POPUP:
            return {
                ...state,
                passengerFormPopup: action.payload
            }
        case ACTIONS.ADD_BOOKED_SEATS:
            return {
                ...state,
                bookedSeats: action.payload
            }
        default:
            return state
    }
}
export default AppReducer