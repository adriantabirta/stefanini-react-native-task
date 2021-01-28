import convertToSections from "./convertToSections";
import startDate from "./startDate";
import _ from 'lodash';


// Convert list of objects to sections list
const listToSections = (list) => {
    return _(list).groupBy(startDate)
    .map(convertToSections)
    .value();
}

export default listToSections;