import React from 'react';
import SegmentedControl from '@react-native-community/segmented-control';
import styled from 'styled-components';

const CustomSegmentControl = styled(SegmentedControl)`
    margin: 20px;
    height: 50px;
    background-color: lightgray;
    font-size: 14px;
`;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: row;

`;

const Label = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 22px;
    color: darkgray;
    top: 200px;
    margin: 50px;    
`;

const Placeholder = props => {

    return <Container>
        <Label style={{textAlignVertical: 'center'}}>Nothing to show, Please book a shift.</Label>
    </Container>
};

export default Placeholder;
