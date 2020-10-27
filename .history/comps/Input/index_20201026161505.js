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
    flex:1;
    background-color:#BED;
        input {
        
            height:22px;
        }
`;

const Input= ({text, placeholder}) => {
    return <InputCont>
        <InputTitle><p>{text}</p></InputTitle>
        <div />
        <InputBox></InputBox>
    </InputCont>
}

Input.defaultProps= {
    text:"default",
    placeholder:"default"
}

export default Input;