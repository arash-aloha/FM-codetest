import axios from "axios";
import { useState, useEffect } from "react";

import { baseUrl } from "../constans/url";

const useFetch = (endpoint: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    const configurationObject = {
      method: "get",
      url: `${baseUrl}/${endpoint}`,
    };
    try {
      const response = await axios(configurationObject);
      setError(false);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Something went wrong when fetching the data.", error);
      setIsLoading(false);
      setError(true);
      throw new Error("Something went wrong when getting data.");
    }
  };

  useEffect(() => {
    console.log(`fetching with endpoint: ${baseUrl}/${endpoint}`);
    fetchData();
  }, []);

  const reFetchData = () => {
    console.log("refetching");
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, reFetchData };
};

export default useFetch;
