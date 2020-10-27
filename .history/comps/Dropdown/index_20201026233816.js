import React from 'react';
import styled, {css} from 'styled-components';

const DropMenu = styled.div`
    border: 1px solid black;
    box-sizing:border-box;
    border-radius:20px;
`;



const Dropdown= ({}) => {
    return <div>
        <DropMenu>
            John Doe
        </DropMenu>
    </div>
    
}

Dropdown.defaultProps= {
 
}

export default Dropdown;