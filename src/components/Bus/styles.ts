import { styled } from "styled-components";
import {ReactComponent as steering} from "../../assets/images/steering.svg"
import Seat from "../Seat/Seat";
export const SBusWrapper = styled.div`
    display: flex;
    border: 1px solid black;
    border-left: 5px solid black;
    padding: 24px;   
    margin-bottom: 24px;
    width: fit-content;
`

export const SSeatRow = styled.div`
display: flex;
flex-direction: column-reverse;
`
export const SStearing = styled(steering)`
    width: 12px;
    height: 12px;
`
export const SDriverCabin = styled.div`
margin-right: 10px;     
padding: 10px;
border-right: 2px solid black;
`

export const LastSeat = styled(Seat)`
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
`