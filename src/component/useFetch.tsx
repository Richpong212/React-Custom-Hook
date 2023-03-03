import React, { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type UseAxiosReturnTypee<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

function useFecth<T>(
  url: string,
  options?: AxiosRequestConfig
): UseAxiosReturnTypee<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios.get(url, options);
        setData(response.data);
      } catch (error: any) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url, options]);
  return { data, loading, error };
}

export default useFecth;
