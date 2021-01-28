
const pad = (num) => {
    return ("0" + num).slice(-2);
}

const itemDatesToTimeInterval = (item) => {
    let startDate = new Date(item.startTime)
    let endDate = new Date(item.endTime)
    return pad(startDate.getHours()) + ":" + pad(startDate.getMinutes()) + "-" + pad(endDate.getHours()) + ":" + pad(endDate.getMinutes())
}

export default itemDatesToTimeInterval;