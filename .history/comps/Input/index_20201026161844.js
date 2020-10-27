import React from 'react';
import styled, {css} from 'styled-components';

const InputCont = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:268px;
    height:28px;
    background-color:red;
       
`;

const InputTitle = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#DAD;
`;

const InputBox = styled.div`
    flex:3;
    background-color:#BED;
        input {
            width:100%;
            height:22px;
        }
`;
const Spacer = styled.div`
        flex:1;
`;

const Input= ({text, placeholder}) => {
    return <InputCont>
        <InputTitle><p>{text}</p></InputTitle>
        <Spacer />
        <InputBox><input placeholder={placeholder} /></InputBox>
    </InputCont>
}

Input.defaultProps= {
    text:"default",
    placeholder:"default"
}

export default Input;