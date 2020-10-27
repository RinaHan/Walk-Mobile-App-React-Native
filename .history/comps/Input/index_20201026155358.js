import React from 'react';
import styled, {css} from 'styled-components';

const InputCont = styled.div`
    display:flex;
    flex-direction:row;
    width:268px;
    height:28px;
    background-color: red;
`;

const InputTitle = styled.div`
    flex:2;
    background-color:#DAD;
`;

const InputBox = styled.div`
    flex:5;
    background-color:#BED;
`;


const Input= ({}) => {
    return <InputCont>
        <InputTitle>
        </InputTitle>
        <InputBox>
        </InputBox>
    </InputCont>
}

Input.defaultProps= {
  
}

export default Input;