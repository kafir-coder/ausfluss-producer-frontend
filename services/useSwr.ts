import useSWR from 'swr';

export const useSwr = <T>(url: string) => {
  const { data, error } = useSWR(url, async (u) => {
    const res = await fetch(u, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessKey')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const responseData = await res.json();
    return responseData as T;
  }, {
    revalidateOnReconnect: true,
    refreshInterval: 1000,
    refreshWhenOffline: true,
    shouldRetryOnError: true,
    errorRetryCount: 5,
    errorRetryInterval: 1000,
  });

  const loading = !data && !error;

  return { data, error, loading };
};
