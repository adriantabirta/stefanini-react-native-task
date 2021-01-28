
// Convet 12345 to 2020/01/01
const convertTimestampsToDates = item => {
    item.startTime = new Date(item.startTime).toLocaleString();
    item.endTime = new Date(item.endTime).toLocaleString();
    return item;
}

export default convertTimestampsToDates;