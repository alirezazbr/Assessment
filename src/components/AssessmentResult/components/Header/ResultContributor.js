import React from 'react';
import styled from 'styled-components';

// import child : ContentBox
import ContentBox from './ContentBox';

const ContributorContainer = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
`;

const ResultContributor = () => {

    let DescObj = {
        "مصاحبه کننده" : "حسان امینی لو",
        "تاریخ مصاحبه" : "تابستان ۹۹",
        "موقعیت شغلی درخواستی" : "برنامه نویس ارشد",
        "نام مصاحبه شونده" : "متانت کرمی",
    };

    return (
        <ContributorContainer>
            {
                Object.entries(DescObj).map(( item, index ) => (
                    <ContentBox key={index} interViewDesc={item[0]} interViewValue={item[1]} />
                ))
            }
        </ContributorContainer>
    );
};

export default ResultContributor;
