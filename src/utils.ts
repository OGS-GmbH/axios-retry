import type { AxiosRetryOptions } from "./types.js";

function getDelay(options: AxiosRetryOptions, attempt: number) {
  switch (options.type) {
    case "exponential":
      return (2 ** attempt - 1) * options.delay;

    case "linear":
      return options.delay;
  }
}

export { getDelay };
