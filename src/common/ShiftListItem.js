import React from 'react';
import styled from 'styled-components';

import CancelButton from "./CancelButton";
import itemDatesToTimeInterval from "./functions/itemDatesToTimeInterval";

const Container = styled.View`
    flex: 1;
    height: 75px;
    flex-direction: column;
`;

const ContentContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

const TimeText = styled.Text`
    font-size: 18px;
    color: #4F6C92;
    align-self: center;
    left: 12px;
`;

const Line = styled.View`
    width: 100%;
    height: 1px;
    background-color: lightgray;
`;

const ShiftListItem = props => {

    return <Container>
        <ContentContainer>
            <TimeText>{itemDatesToTimeInterval(props.children)}</TimeText>
            <TimeText>{props.children.area}</TimeText>
            <CancelButton onPress={() => { props.onPress(props.children.id) }} />
        </ContentContainer>
        <Line />
    </Container>
};

export default ShiftListItem;