import { useEffect } from "react";

const useDebounce = <T>(callbackFn: (value: T) => void, value: T) => {
  useEffect(() => {
    const callbackTimeout = setTimeout(() => callbackFn(value), 500);

    return () => clearTimeout(callbackTimeout);
  }, [callbackFn, value]);
};

export default useDebounce;
