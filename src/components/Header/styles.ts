import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const SWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px;
`
export const STitle = styled(Link)`
    all: unset;
    font-size: 18px;
`

export const SNavSection = styled.div`
    display: flex;
    
`
export const SLink = styled(Link)`
    all: unset;
    padding : 4px;
    font-size: 18px;
    border-right: 1px solid #ddd;
    &:last-child {
        border-right: none;
    }
    &:hover {
        color: red;
    }
`