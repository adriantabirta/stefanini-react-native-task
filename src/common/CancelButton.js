import React from 'react';
import styled from 'styled-components';

const ActionButtonContainer = styled.TouchableOpacity`
    background-color: #E2006A;
    margin: 10px;
    padding: 15px;
    height: 60%;
    aspect-ratio: 2;
    justify-content: center;
    align-content: center;  
    border-radius: 25px;
    align-self: center;
`;

const TextColor = styled.Text`
    color: white;
    align-self: center;
`;

const CancelButton = props => {

    return <ActionButtonContainer disabled={props.disabled} onPress={props.onPress}>
        <TextColor>Cancel</TextColor>
    </ActionButtonContainer>
};

export default CancelButton;