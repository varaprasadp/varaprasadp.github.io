export interface IAction {
    type: string,
    payload: any
}

export interface IPassenger {
    firstName: string,
    lastName: string,
    seatNumber: string,
    bookingDate: string,
    email: string
}
export interface IAppState {
    activeSeat: string
    events: IEvents
    bookedSeats: Map<string, IPassenger>
    passengerFormPopup: Boolean
}
export interface IEvents {
    setActiveSeat: Function
    setPassengerFormPopup: Function
    setBookedSeat: Function
    deleteBookedSeat: Function
    addBookedSeats: Function
}
