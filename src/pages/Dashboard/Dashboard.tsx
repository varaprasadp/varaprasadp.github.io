import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../AppContext'
import { IAppState } from '../../types'
import { Grid, Typography } from "@material-ui/core";
import PassengerCard from '../../components/PassengerCard';
import { SWarn } from './styles';
const Dashboard = () => {
  const context: IAppState = useContext(AppContext)
  const { bookedSeats } = context
  const valuesArray = Array.from(bookedSeats.keys());
  return (
    valuesArray.length != 0? <div >
      <Grid container spacing={4}>
        {valuesArray.map((ticket) => 
         <Grid key={ticket} item xs={12} sm={6} md={4} lg={3}>
            <PassengerCard
              id={ticket}
              addToCart={() => {}}
            />
          </Grid>
        )}
      </Grid>
    </div>:
    <SWarn><Typography>No bookings yet!!!</Typography>
    <Typography>To book please go to reserve section</Typography></SWarn>
  )
}

export default Dashboard