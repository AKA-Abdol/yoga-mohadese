import { useEffect } from "react";
import { IDebounceConfig } from "./useDebounce.types";

const useDebounce = <T>(
  callbackFn: (value: T) => void,
  value: T,
  config?: IDebounceConfig
) => {
  useEffect(() => {
    const callbackTimeout = setTimeout(
      () => callbackFn(value),
      config?.timeout ?? 500
    );

    return () => clearTimeout(callbackTimeout);
  }, [callbackFn, value, config]);
};

export default useDebounce;
