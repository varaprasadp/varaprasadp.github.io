import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import CardHeader from "@material-ui/core/CardHeader";
import { IAppState } from "../types";
import { AppContext } from "../AppContext";
import { Collapse } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minWidth: "300px",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "-3px -3px 5px #ffffff70, 3px 3px 15px #00000070",
    padding: "10px"
  },
  media: {},
  icon: {},
  actionarea: {
    textAlign: "left",
  },
  grow: {
    flexGrow: 1,
    display: "flex",
  },
  expand: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
}));

export default function PassengerCard(props: any) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [cartIconClick, setCartIconClick] = useState(false);


  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };
  const handleIconMouseDown = () => {
    setCartIconClick(true);
  };
  const handleIconMouseUp = () => {
    setCartIconClick(false);
  };

  const context: IAppState = useContext(AppContext)
  const { bookedSeats, events } = context
  const ticket = bookedSeats.get(props.id)

  return (
    <Card
      className={classes.root}
      onMouseEnter={() => {
        handleMouseEnter();
      }}
      onMouseLeave={() => {
        handleMouseLeave();
      }}
    >
      <CardActionArea className={classes.expand}>
        <CardHeader
          title={ticket?.firstName}
          subheader={ticket?.lastName}
          style={{ textAlign: "left" }}
        />

        <CardContent>
          <Typography variant="body2" component="p">
            <b>Seat No. : </b>
            {ticket?.seatNumber}
          </Typography>
          <Typography>
            <b>Date: </b> {ticket?.bookingDate}
          </Typography>
        </CardContent>
      </CardActionArea>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
       
        <CardActions disableSpacing>
        <CardContent className={classes.expand}>
          <Typography>
            <b>Email:</b> {ticket?.email}
          </Typography>
        </CardContent>
          <IconButton
            className={classes.icon}
            onClick={() => {events.deleteBookedSeat(ticket?.seatNumber)}}
            onMouseDown={() => {
              handleIconMouseDown();
            }}
            disableRipple={true}
            onMouseUp={() => {
              handleIconMouseUp();
            }}
            style={{
              borderRadius: "50px",
              boxShadow: cartIconClick
                ? "inset -3px -3px 5px #ffffff70, inset 3px 3px 15px #00000070"
                : " -3px -3px 5px #ffffff70, 3px 3px 15px #00000070",
            }}
          >
            <ClearOutlinedIcon />
          </IconButton>
      </CardActions>
      </Collapse>
    </Card>
  );
}
