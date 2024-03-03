import React, { useContext } from 'react'
import { LastSeat, SBusWrapper, SDriverCabin, SSeatRow, SStearing } from './styles'
import Seat from '../Seat/Seat'
import { BusProps } from './types';
import { AppContext } from '../../AppContext';
import { IAppState } from '../../types';
import Popup from '../Popup/Popup';
import Form  from '../Form/Form';
const Bus = (props: BusProps) => {
    const context:IAppState = useContext(AppContext);
    const {passengerFormPopup, events} = context
    const busLayout = () => {
        const seatElements = []
        for(let rowIndex = 0; rowIndex < props.rows; ++rowIndex){
            const row = [];
            for (let seatIndex = 1; seatIndex <= props.seatsPerRow; seatIndex++) {
              row.push(<Seat key={`${rowIndex}-${seatIndex}`} id = {`${props.lower?'L':'U'}${(rowIndex*3)+seatIndex}`}/>);
            }
            seatElements.push(<SSeatRow key={rowIndex} >{row}</SSeatRow>);
        } 
        return seatElements
    }

    return (
        <SBusWrapper>
            {passengerFormPopup && 
                <Popup onClose={()=>{events.setPassengerFormPopup(false); events.setActiveSeat("")}}>
                    <Form/>
                </Popup>}
            <SDriverCabin>{props.lower && <SStearing />}</SDriverCabin>
            {busLayout()}
            <LastSeat id={"service-seat"}/>
        </SBusWrapper>
    )
}

export default Bus