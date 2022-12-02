import { useEffect, useState } from "react";
import axios from "axios"


const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    let isMounted = true;
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axios.get(url,{signal: controller.signal});
        isMounted &&  setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();

    return () => {
      isMounted = false;
      controller.abort();
  }
  }, [url]);

  const reFetch = async () => {
    // setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;

