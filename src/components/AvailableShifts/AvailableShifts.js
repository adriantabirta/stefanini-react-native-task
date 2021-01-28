import React, { useEffect, useState } from 'react';
import { SectionList } from 'react-native';
import _ from 'lodash';

import SafeAreaViewContainer from "../../common/SafeAreaViewContainer";
import WhiteFlexContainer from "../../common/WhiteFlexContainer";
import FilterView from "./components/FilterView";
import SectionHeaderView from "../../common/SectionHeaderView";
import AvailableShiftListItem from "./components/AvailableShiftListItem";

import listToSections from "../../common/functions/listToSections";
import { AppContext } from "../../../App";

const distinctFilters = (list) => {
    return [...new Set(list.map(item => item.area))];
}

const titlesCount = (distinctFilters, shifts) => {
    return distinctFilters.map(area => {
        let count = shifts.filter(shift => shift.area === area).length;
        return area + " (" + count + ")";
    })
}

const AvailableShifts = props => {

    const { bookShiftWithId, cancelShiftWithId } = React.useContext(AppContext);

    const [shifts, setShifts] = useState(props.shifts);
    const [sections, setSections] = useState(listToSections(props.shifts));

    const [filters, setFilters] = useState(distinctFilters(props.shifts));
    const [filterTitles, setFilterTitles] = useState(titlesCount(distinctFilters(props.shifts), props.shifts));

    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

    useEffect(() => {

        const filtered = shifts.filter(item => { return item.area == filters[selectedFilterIndex] })
        setSections(listToSections(filtered))

    }, [selectedFilterIndex])

    return <SafeAreaViewContainer >
        <WhiteFlexContainer>
            <FilterView onChange={index => { setSelectedFilterIndex(index) }}>{filterTitles}</FilterView>
            <SectionList
                sections={sections}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <AvailableShiftListItem onBook={bookShiftWithId} onCancel={cancelShiftWithId}>{item}</AvailableShiftListItem>}
                renderSectionHeader={({ section }) => <SectionHeaderView >{section.title}</SectionHeaderView> }
            />
        </WhiteFlexContainer>
    </SafeAreaViewContainer>
};

export default AvailableShifts;
