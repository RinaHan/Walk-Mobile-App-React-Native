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
    display:flex;
    align-items:center;
    justify-content:center;
`;

const InputBox = styled.div`
    flex:5;
    background-color:#BED;
`;


const Input= ({text}) => {
    return <InputCont>
        <InputTitle><p>{text}</p></InputTitle>
        <InputBox>
        </InputBox>
    </InputCont>
}

Input.defaultProps= {
    text:"default"
}

export default Input;