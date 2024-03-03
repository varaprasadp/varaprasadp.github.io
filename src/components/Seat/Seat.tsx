import React, { useContext } from 'react'
import { SSeatWrapper } from './styles'
import Pillow from './Pillow'
import { SeatProps } from './types'
import { IAppState } from '../../types'
import { AppContext } from '../../AppContext'

const Seat = (props: SeatProps) => {
  const context:IAppState = useContext(AppContext);
  const {events, bookedSeats, passengerFormPopup} = context
  const onClick = (id: string) => {
    if(!bookedSeats.has(id)) {
      events.setActiveSeat(id)
      events.setPassengerFormPopup(true);
    }
  }
  return (
    <SSeatWrapper onClick={() => onClick(props.id)} booked={bookedSeats.has(props.id)}>
        <Pillow />
    </SSeatWrapper>
  )
}

export default Seat