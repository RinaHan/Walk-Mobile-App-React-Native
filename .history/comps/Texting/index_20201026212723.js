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

const Add = styled.div`
    flex:1;
    background-color:green;
`;

const Textbox = styled.div`
    flex:6;
    background-color:blue;
    input {
        width:90%;
        height:90%;
    }
`;

const NextArrow = styled.div`
    flex:1;
    background-color:green;
`;

const Texting= ({}) => {
    return <InputCont>
        <Inputs>
        <Add></Add>
        <Textbox><input /></Textbox>
        <NextArrow></NextArrow>
        </Inputs>
    </InputCont>
}

Texting.defaultProps= {
 
}

export default Texting;