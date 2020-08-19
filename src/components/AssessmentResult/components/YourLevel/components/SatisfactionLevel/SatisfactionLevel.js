import React from 'react';
import styled from 'styled-components';
import './assets/SatisfactionLevel.css';
import './assets/SatisfactionLevelInner.css';
import './assets/SatisfactionLevelOuter.css';
import './assets/SatisfactionLevelTrigger.css';

const SemicircularContainer = styled.div`
    width: 350px;
    height: 175px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`;

const SatisfactionLevel = () => {
    return (
        <SemicircularContainer>
            <ul class="chart-skills-outer" />

            <ul class="chart-skills">
                <li />
                <li />
                <li />
            </ul>

            <ul class="chart-skills-inner">
                <li />
            </ul>

            <ul class="chart-skills-trigger">
                <li />
            </ul>
        </SemicircularContainer>
    );
};

export default SatisfactionLevel;
