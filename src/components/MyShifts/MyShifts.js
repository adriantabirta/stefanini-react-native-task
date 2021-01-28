import React from 'react';
import { SectionList } from 'react-native';
import _ from 'lodash';

import SafeAreaViewContainer from "../../common/SafeAreaViewContainer";
import WhiteFlexContainer from "../../common/WhiteFlexContainer";
import SectionHeaderView from "../../common/SectionHeaderView";
import ShiftListItem from "../../common/ShiftListItem";
import Placeholder from "./components/Placeholder";

import listToSections from "../../common/functions/listToSections";

import { AppContext } from "../../../App";

const MyShifts = props => {

    const { cancelShiftWithId } = React.useContext(AppContext);

    return <SafeAreaViewContainer>
        <WhiteFlexContainer>
            <SectionList
                ListEmptyComponent={Placeholder}
                sections={listToSections(props.shifts)}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => (<ShiftListItem onPress={(id) => cancelShiftWithId(id)}>{item}</ShiftListItem>)}
                renderSectionHeader={({ section }) => <SectionHeaderView key={section.title}>{section.title}</SectionHeaderView>}
            />
        </WhiteFlexContainer>
    </SafeAreaViewContainer>
};

export default MyShifts;