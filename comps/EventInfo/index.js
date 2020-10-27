import React from 'react';
import styled from 'styled-components';

const Buttontext = styled.div`
`;

const Buttonbox = styled.div`
`;

const Details = styled.div`
`;

const Paw = styled.div`
`;

const Number = styled.div`
`;

const Subhead = styled.div`
color:#53B7BE;
`;

const Title = styled.div`
`;

    const EventInfo = () => {
        return <div>
            <Title>Rocky Point Park</Title>
            <Subhead>Wednesday, Oct 6th 2020</Subhead>
            <Number>6</Number><Paw></Paw>
            <Details>2:00pm <br></br>more details here<br></br>more details here</Details>
            <Buttonbox>
                <Buttontext>Interested</Buttontext>
            </Buttonbox>
        </div>
    }


export default EventInfo;