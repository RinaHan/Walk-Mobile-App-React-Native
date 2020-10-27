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
        width:100%;
        height:100 %;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        border-radius: 12px;
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