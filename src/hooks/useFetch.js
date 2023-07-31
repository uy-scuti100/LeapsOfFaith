import { useState, useEffect } from "react";
import { request } from "../request";

const useFetch = (url) => {
  const [data, setData] = useState({ data: null });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await request.get(url);
        setData({ data: res.data.data });
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { data: data.data, isLoading, error };
};

export default useFetch;
