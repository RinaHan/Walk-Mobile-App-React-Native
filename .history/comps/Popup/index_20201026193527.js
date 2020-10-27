import React from 'react';
import styled, {css} from 'styled-components';

const PopupCont = styled.div`
    width:324px;
    height:254px;
    background-color:red;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const Exit = styled.div`
    display:flex;
    width:100%;
    height:15%;
    background-color:#DAD;
    align-items:center;
    justify-content:flex-end;
        div {
            width:30px;
            height:30px;
            background-color:blue;
            image-fit:contain;
            img {
                width:100%;
                height:100%;
                object-fit:cover;
            }
        }
`;

const Text = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
        height:40%;
        background-color:#BED;
`;

const Inputs = styled.div`
        
        width:100%;
        background-color:#ABC;
`;

const RowCont = styled.div`
        display:flex;
        flex-direction:row;
        height:40px;
        background-color:#BDD;
`;

const Popup= ({}) => {
    return <PopupCont>
        <Exit><div><img src="close.png"/></div></Exit>
        <Text>Send a Message</Text>
        <Inputs>
            <RowCont></RowCont>
        </Inputs>
    </PopupCont>
}

Popup.defaultProps= {
 
}

export default Popup;