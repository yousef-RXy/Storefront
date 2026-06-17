import api from '../utils/api';

import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = endpoint => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!endpoint) return;

    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get(endpoint);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
