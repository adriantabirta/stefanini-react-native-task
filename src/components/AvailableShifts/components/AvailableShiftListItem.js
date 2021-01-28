import React from 'react';
import styled from 'styled-components';

import CancelButton from "../../../common/CancelButton";
import BookButton from "../../../common/BookButton";
import itemDatesToTimeInterval from "../../../common/functions/itemDatesToTimeInterval";

const Container = styled.View`
    flex: 1;
    height: 75px;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`;

const ConnentContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

const BookedText = styled.Text`
    font-size: 18px;
    color: #4F6C92;
    align-self: center;

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

const AvailableShiftListItem = props => {

    return <Container>
        <ConnentContainer>
            <TimeText>{itemDatesToTimeInterval(props.children)}</TimeText>
            {
                props.children.booked ? <BookedText>Booked</BookedText> : null
            }
            {
                props.children.booked ? <CancelButton onPress={() => { props.onCancel(props.children.id) }}/> : <BookButton onPress={() => { props.onBook(props.children.id) }}/>
            }
        </ConnentContainer>

        <Line />
    </Container>
};

export default AvailableShiftListItem;