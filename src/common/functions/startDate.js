
// Function to convert item timestamp into locale date
const startDate = item => new Date(item.startTime).toLocaleDateString();

export default startDate;