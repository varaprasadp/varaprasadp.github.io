import React from 'react'
import Bus from '../../components/Bus/Bus'
import { SWrapper } from './styles'


const Reservation = () => {
  return (
    <SWrapper>
      <Bus lower={true} rows={8} seatsPerRow={3} />
      <Bus lower={false} rows={8} seatsPerRow={3}/>
    </SWrapper>
  )
}

export default Reservation