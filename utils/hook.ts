import axios from "axios";
import { useState } from "react";

import { baseUrl } from "../constans/url";

export type ClubDetails = {
  bookableEarliest: string;
  bookableLatest: string;
  businessUnit: BusinessUnit;
  cancelled: boolean;
  duration: Duration;
  externalMessage: boolean;
  groupActivityProduct: GroupActivityProduct;
  id: string;
  instructors: Instructors[];
  internalMessage: boolean;
  locations: Locations;
  name: string;
  slots: Slots;
};

interface BusinessUnit {
  id: number;
  name: string;
  location: string;
  companyNameForInvoice: string;
}

interface Duration {
  start: string;
  end: string;
}

interface GroupActivityProduct {
  id: string;
  name: string;
}

interface Instructors {
  id: string;
  isSubstitute: boolean;
  name: string;
}

interface Locations {
  id: number;
  name: string;
}

interface Slots {
  hasWaitingList: boolean;
  inWaitingList: number;
  leftToBook: number;
  leftToBookIncDropin: number;
  reservedForDropin: number;
  total: number;
  totalBookable: number;
}

const useFetch = (endpoint: string) => {
  const [data, setData] = useState<ClubDetails[]>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [isError, setIsError] = useState<boolean>();

  const fetchData = async () => {
    setIsLoading(true);
    const configurationObject = {
      method: "get",
      url: `${baseUrl}/${endpoint}`,
    };
    try {
      const response = await axios(configurationObject);
      setIsError(false);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Something went wrong when fetching the data.", error);
      setIsLoading(false);
      setIsError(true);
      throw new Error("Something went wrong when getting data.");
    }
  };

  const reFetchData = () => {
    fetchData();
  };

  return { data, isLoading, isError, reFetchData, fetchData };
};

export default useFetch;
