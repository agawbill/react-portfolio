import { useReducer, useCallback } from "react";

const initialState = {
  error: false,
  loading: false,
  done: false
};

const fetchReducer = (fetchState, action) => {
  switch (action.type) {
    case "SEND":
      return {
        ...fetchState,
        loading: true
      };
    case "DONE":
      return {
        ...fetchState,
        loading: false,
        done: true
      };
    case "ERROR":
      return {
        loading: false,
        error: true
      };
    default:
      throw new Error("should not be reached");
  }
};

const useFetch = () => {
  const [fetchState, dispatchFetch] = useReducer(fetchReducer, initialState);

  const sendRequest = useCallback(async (body, method, url) => {
    try {
      dispatchFetch({ type: "SEND" });
      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        mode: "no-cors",
        body: JSON.stringify(body)
      });
      dispatchFetch({ type: "DONE" });
    } catch (err) {
      dispatchFetch({ type: "ERROR" });
    }
  }, []);
  return {
    sendRequest,
    done: fetchState.done,
    error: fetchState.error,
    loading: fetchState.loading
  };
};

export default useFetch;
