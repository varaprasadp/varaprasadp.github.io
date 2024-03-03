import { styled } from "styled-components";

export const SSeatWrapper = styled.div<{booked?: Boolean}>`

    border: 1px solid black;
    height: 24px;
    width: 48px;
    margin: 4px;
    display: flex;
    align-items: center;
    justify-content: right;
    &:first-child {
        margin-top: 14px;
    }
    ${(props) => 
        props.booked && `background-color: grey`
    }

`

export const SPillow = styled.div`
    border: 1px solid black;
    height: 10px;
    width: 4px;
    margin-right: 4px;
`