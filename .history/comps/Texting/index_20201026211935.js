import React from 'react';
import styled, {css} from 'styled-components';

const InputCont = styled.div`
    with:532px;
    height:119px;
    background-color:#DBB;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Inputs = styled.div`
  display:flex;
  flex-direction:row;
  width:344px;
  height:37px;
  background-color:#BBD

`;

const Texting= ({}) => {
    return <InputCont>
        <Inputs></Inputs>
    </InputCont>
}

Texting.defaultProps= {
 
}

export default Texting;