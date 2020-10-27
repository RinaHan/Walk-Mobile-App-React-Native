import React from 'react';
import styled, {css} from 'styled-components';

const DropMenu = styled.div`
    border: 1px solid black;
    display:flex;
    width:273px;
    height:40px;
    justify-content:center;
    align-items:center;
    background-color:red;
`;

const DropBox = styled.div`
    width:100%;
    padding:10px;

`;


const Dropdown= ({}) => {
    return <div>
        <DropMenu>
         <DropBox>
             <div> <img src="downarrow.png"/></div>
         </DropBox>
        </DropMenu>
    </div>
    
}

Dropdown.defaultProps= {
 
}

export default Dropdown;