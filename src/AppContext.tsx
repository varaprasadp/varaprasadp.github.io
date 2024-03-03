import { createContext, useEffect, useReducer } from "react";
import { ACTIONS } from "./constants";
import AppReducer from "./AppReducer";
import { IAppState, IPassenger } from "./types";

export const AppContext: any = createContext([]);

const AppContextProvider = (props: any) => {
    
    const setActiveSeat = (seat: string) => {
        dispatch({type: ACTIONS.SET_ACTIVE_SEAT, payload: seat})
    }
    const setPassengerFormPopup = (popup: Boolean) => {
        dispatch({type: ACTIONS.SET_PASSENGER_FORM_POPUP, payload: popup})
    }
    const setBookedSeat = (passenger: IPassenger) => {
        dispatch({type: ACTIONS.BOOK_SEAT, payload: passenger})
    }
    const deleteBookedSeat = (seat: string) => {
        dispatch({type: ACTIONS.UNBOOK_SEAT, payload: seat})
    }
    const addBookedSeats = (bookedSeats: Map<string, IPassenger>) => {
        dispatch({type: ACTIONS.ADD_BOOKED_SEATS, payload: bookedSeats})
    }
    
    const initialState: IAppState = {
        bookedSeats: new Map<string, IPassenger>(),
        events: {
            setActiveSeat,
            setPassengerFormPopup,
            setBookedSeat,
            deleteBookedSeat,
            addBookedSeats
        },
        passengerFormPopup: false,
        activeSeat: ""
    }
    const [state, dispatch] = useReducer(AppReducer,initialState)

    return (<AppContext.Provider value= {state}>
        {props.children}
    </AppContext.Provider>)
}
export default AppContextProvider