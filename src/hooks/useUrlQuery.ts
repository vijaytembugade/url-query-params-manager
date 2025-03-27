const baseUrl = window.location.href;

const useUrlQuery = () => {
  const url = new URL(baseUrl);

  const queryParams = url.searchParams;

  const getQueryParam = (key: string) => {
    return queryParams.get(key);
  };

  const setQueryParam = (key: string, value: string) => {
    queryParams.set(key, value);
    window.history.pushState(
      {},
      "",
      `${url.pathname}?${queryParams.toString()}`
    );
  };

  const removeQueryParam = (key: string) => {
    queryParams.delete(key);
    window.history.pushState(
      {},
      "",
      `${url.pathname}?${queryParams.toString()}`
    );
  };

  const removeAllQueryParams = () => {
    queryParams.forEach((value, key) => {
      queryParams.delete(key);
    });
    window.history.pushState({}, "", `${url.pathname}`);
  };

  const getAllQueryParams = () => {
    return Object.fromEntries(queryParams.entries());
  };

  return {
    getQueryParam,
    setQueryParam,
    removeQueryParam,
    getAllQueryParams,
    removeAllQueryParams,
  };
};

export default useUrlQuery;
