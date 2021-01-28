
import React from 'react';
import SegmentedControl from '@react-native-community/segmented-control';
import styled from 'styled-components';

const CustomSegmentControl = styled(SegmentedControl)`
    margin: 20px;
    height: 50px;
    background-color: lightgray;
    font-size: 14px;
`;

const FilterView = props => {

    return <CustomSegmentControl
        values={props.children}
        selectedIndex={0}
        onChange={(event) => {
            props.onChange(event.nativeEvent.selectedSegmentIndex)
        }}
    />
};

export default FilterView;
