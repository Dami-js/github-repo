import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";

interface UseFetchOptions extends AxiosRequestConfig {}

export interface UseFetchError {
  statusCode?: number;
  message?: string;
}

export const useFetch = ({ method = "GET", ...config }: UseFetchOptions) => {
  // let loading: boolean = false;
  let error: boolean = false;
  const [responseData, setResponseData] = useState<AxiosResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetch = async () => {
    try {
      setLoading(true);
      const response = await axios(config);
      setResponseData(response);
      setLoading(false);
    } catch (err) {
      error = true;
      setLoading(false);
    }
  };

  return Object.freeze({
    fetch,
    ...responseData,
    loading,
    error,
  });
};
