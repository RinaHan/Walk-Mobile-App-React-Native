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

`;

const Text = styled.div`

`;

const Inputs = styled.div`

`;

const Popup= ({}) => {
    return <PopupCont>
        <Exit></Exit>
        <Text></Text>
        <Inputs></Inputs>
    </PopupCont>
}

Popup.defaultProps= {
 
}

export default Popup;