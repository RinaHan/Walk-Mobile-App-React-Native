import React from 'react';
import styled, {css} from 'styled-components';

const DropMenu = styled.div`
    border: 1px solid black;
    box-sizing:border-box;
    border-radius:20px;
    display:flex;
    width:273px;
    height:40px;
`;



const Dropdown= ({}) => {
    return <div>
        <DropMenu>
         
        </DropMenu>
    </div>
    
}

Dropdown.defaultProps= {
 
}

export default Dropdown;