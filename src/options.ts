import {
  AXIOS_RETRY_DEFAULT_COUNT,
  AXIOS_RETRY_DEFAULT_EXPONENTIAL_DELAY,
  AXIOS_RETRY_DEFAULT_LINEAR_DELAY,
  AXIOS_RETRY_DEFAULT_TYPE,
  axiosRetryDefaultWhen
} from "./defaults.js";
import type { AxiosRetryOptions } from "./types.js";

function getOptions(provided?: Partial<AxiosRetryOptions>): AxiosRetryOptions {
  const type = provided?.type ?? AXIOS_RETRY_DEFAULT_TYPE;

  return {
    type,
    count: provided?.count ?? AXIOS_RETRY_DEFAULT_COUNT,
    delay:
      (provided?.delay ?? type === "exponential")
        ? AXIOS_RETRY_DEFAULT_EXPONENTIAL_DELAY
        : AXIOS_RETRY_DEFAULT_LINEAR_DELAY,
    when: provided?.when ?? axiosRetryDefaultWhen
  };
}

export { getOptions };
