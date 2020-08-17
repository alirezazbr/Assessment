import React from 'react';
import styled from 'styled-components';

const ContentBoxField = styled.div`
    width: 200px;
    height: 95px;
    background-color: #EEEDFC;
    float: left;
    margin: 0 10px;
    padding: 0;
    color: #5A5A5A;
`;

const BoxTitle = styled.div`
    width: 100%;
    height: 47px;
    padding: 0;
    margin: 0;
    background-image: linear-gradient(to right, #959393 50%, rgba(255,255,255,0) 0%);
    background-position: bottom;
    background-size: 18px 1px;
    background-repeat: repeat-x;
`;

const BoxTitleContent = styled.p`
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: Arial;
    font-weight: 600;
    font-size: 15px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`;

const BoxDescription = styled.div`
    width: 100%;
    height: 47px;
    padding: 0;
    margin: 0;
`;

const BoxDescContent = styled.p`
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: Arial;
    font-weight: 600;
    font-size: 15px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`;

const ContentBox = ({ interViewDesc, interViewValue }) => {
    return (
        <ContentBoxField>

            <BoxTitle>
                <BoxTitleContent>
                    {interViewDesc}
                </BoxTitleContent>
            </BoxTitle>

            <BoxDescription>
                <BoxDescContent>
                    {interViewValue}
                </BoxDescContent>
            </BoxDescription>
        </ContentBoxField>
    );
};

export default ContentBox;