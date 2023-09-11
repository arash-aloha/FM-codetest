const createEndpointUrl = (
  id: string,
  startDate: string,
  endDate: string
): string => {
  return `businessunits/${id}/groupactivities?period.start=${startDate}&period.end=${endDate}`;
};

const getCurrentTimestamp = () => {
  return new Date();
};

const getTimestamp6DaysAhead = () => {
  const currentDate = getCurrentTimestamp();
  const futureDate = currentDate.setDate(currentDate.getDate() + 6);
  return new Date(futureDate);
};

const getEncodedTimeStamp = (timestampString) => {
  const encodedTimestamp = timestampString.toISOString();
  return encodedTimestamp;
};

const getTime = function convertTimeToString(timeString: string) {
  const time = new Date(timeString);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  return `${formattedHours}:${formattedMinutes}`;
};

interface Grouped {
  [key: number]: string;
}
const groupSlotsByDay = (slots) => {
  const groupedSlots = slots.reduce((acc: Grouped, currentValue) => {
    const currentDay = new Date(currentValue).getDay();
    acc[currentDay] = currentValue;
    return acc;
  }, {});

  console.log("grouped", groupedSlots);
};

export {
  createEndpointUrl,
  getCurrentTimestamp,
  getTimestamp6DaysAhead,
  getTime,
  getEncodedTimeStamp,
  groupSlotsByDay,
};
