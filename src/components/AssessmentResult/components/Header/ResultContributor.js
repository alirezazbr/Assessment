import React from 'react';
import styled from 'styled-components';

// import child : ContentBox
import ContentBox from './ContentBox';

const ContributorContainer = styled.div`
    width: 880px;
    height: 95px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
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
