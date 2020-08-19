import React from 'react';
import styled from 'styled-components';

import { SatisfactionLevel } from './components/SatisfactionLevel';

const LevelContainer = styled.div`
    width: 100%;
    height: auto;
`;

const LevelTitle = styled.div`
    width: 100%;
    height: 50px;
    text-align: right;
`;

const TitleContent = styled.p`
    font-family: Arial;
    font-weight: bold;
    font-size: 20px;
    text-align: right;
    color: blue;
    margin-right: 20px;
`;

const TitleContentEn = styled.span`
    font-family: Arial;
    font-size: 15px;
    font-weight: 500;
    color: blue;
`;

const YourLevel = () => {

    return (
        <LevelContainer>
            <LevelTitle>
                <TitleContent>
                   <TitleContentEn>Your Level</TitleContentEn> تعیین سطح 
                </TitleContent>
            </LevelTitle>

            <SatisfactionLevel />
        </LevelContainer>
    );
};

export default YourLevel;
