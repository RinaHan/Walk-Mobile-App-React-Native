import React from 'react';
import styled, {css} from 'styled-components';

const DropMenu = styled.div`
    border: 1px solid black;
  
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