import React from 'react';
import styled from 'styled-components';

const ActionButtonContainer = styled.TouchableOpacity`
    background-color: #16A64D;
    padding: 15px;
    height: 60%;
    aspect-ratio: 2;
    align-self: center; 
    border-radius: 25px;
    right: 12px;
`;

const TextColor = styled.Text`
    color: white;
    align-self: center;
`;

const BookButton = props => {

    return <ActionButtonContainer disabled={props.disabled} onPress={props.onPress}>
        <TextColor>Book</TextColor>
    </ActionButtonContainer>
};

export default BookButton;