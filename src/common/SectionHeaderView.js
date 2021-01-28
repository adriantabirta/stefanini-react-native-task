import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.Text`
    background-color: #F1F4F8;
    font-size: 29px;
    padding: 5px;
    color: #4F6C92;
`;

const SectionHeaderView = props => {
    return <SectionContainer>{props.children}</SectionContainer>
}

export default SectionHeaderView;