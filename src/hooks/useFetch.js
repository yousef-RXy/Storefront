import api from '../utils/api';

import { useEffect, useState } from 'react';

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
        setData(response.data);
      } catch (error) {
        const errorMessage = error.message || 'An unexpected error occurred';
        const status = error.status;
        setError({ errorMessage, status });
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
