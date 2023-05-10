import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const url = `https://restcountries.com/v3.1/${endpoint}/${query}`;

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(url);
      const dataCode = response.data;
      setData(
        dataCode.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
      );
    } catch (err) {
      console.log(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query, endpoint]);

  return { data, isLoading, isError };
};

export default useFetch;
