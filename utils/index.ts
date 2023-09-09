const createEndpointUrl = (
  id: string,
  startDate: string,
  endDate: string
): string => {
  return `businessunits/${id}/groupactivities?period.start=${startDate}&period.end=${endDate}`;
};

const getCurrentTimestamp = () => {
  const currentDate = new Date();
  const isoTimestamp = currentDate.toISOString();
  return encodeURIComponent(isoTimestamp);
};

const getTimestamp7DaysAhead = () => {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 7);
  const isoTimestamp = futureDate.toISOString();
  return encodeURIComponent(isoTimestamp);
};

const getTime = function convertTimeToString(timeString: string) {
  const time = new Date(timeString);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  return `${formattedHours}:${formattedMinutes}`;
};

const getWeekDay = () => {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursdsay",
    "Friday",
    "Saturday",
  ];

  const weekDaysForGivenTimeSpan = [];
};

export {
  createEndpointUrl,
  getCurrentTimestamp,
  getTimestamp7DaysAhead,
  getTime,
};
