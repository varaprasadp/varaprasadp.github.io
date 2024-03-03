import React from 'react';
import styled from 'styled-components';
import { IPopupProps } from './types';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Popup = (props: IPopupProps) => {
  return (
    <Backdrop onClick={()=>props.onClose()}>
      <PopupContent onClick={(e) => e.stopPropagation()}>
        {props.children}
      </PopupContent>
    </Backdrop>
  );
};

export default Popup;
