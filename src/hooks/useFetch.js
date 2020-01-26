import { useReducer, useCallback } from "react";
import { keys } from "../config/keys";

const initialState = {
  error: false,
  loading: false,
  done: null
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
  const url = keys.url;
  const sendRequest = useCallback(
    async (body, method) => {
      try {
        dispatchFetch({ type: "SEND" });
        const data = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json"
          },
          mode: "no-cors",
          body: JSON.stringify(body)
        });
        console.log(data);

        const response = await data.json();
        if (response.ok) {
          dispatchFetch({ type: "DONE" });
        }
      } catch (err) {
        console.log(err);

        dispatchFetch({ type: "ERROR" });
      }
    },
    [url]
  );
  return {
    sendRequest,
    done: fetchState.done,
    error: fetchState.error,
    loading: fetchState.loading
  };
};

export default useFetch;
