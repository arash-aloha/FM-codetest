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

const getWeekDay = (data) => {
  {
    data.forEach((item) => {
      const timestampDate = new Date(item.duration.start);
      console.log("timestampdate", timestampDate);
      const weekday = timestampDate.getDay();
      console.log("wwekday", weekday);
      const groupedData = {};
      if (!groupedData[weekday]) {
        groupedData[weekday] = [];
      }
      groupedData[weekday].push(item);

      const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      for (let weekday in groupedData) {
        if (groupedData.hasOwnProperty(weekday)) {
          const dayOfWeek = weekdays[weekday];
          const objects = groupedData[weekday];

          console.log(`Cards for ${dayOfWeek}:`);
          objects.forEach((obj) => {
            console.log(`- ${obj.name}`);
          });
        }
      }
    });
  }
};

export {
  createEndpointUrl,
  getCurrentTimestamp,
  getTimestamp6DaysAhead,
  getTime,
  getEncodedTimeStamp,
  getWeekDay,
};
