import type { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { getOptions } from "./options.js";
import type { AxiosRetryOptions } from "./types.js";
import { getDelay } from "./utils.js";

declare module "axios" {
  interface AxiosRequestConfig {
    __axiosRetryAttempts?: number;
  }
}

/**
 * Add a retry interceptor to an `AxiosInstance`
 *
 * @param axios - `AxiosInstance`
 * @param options - Configurable {@link AxiosRetryOptions}
 *
 * @example
 * ```tsx
 * import { create } from "axios";
 * import { axiosRetry } from "@ogs-gmbh/axios-retry";
 *
 * function makeACall() {
 *   const instance = create({
 *     baseURL: "https://ogs.de/example"
 *   });
 *
 *   axiosRetry(
 *     instance
 *   );
 *
 *   return instance;
 * }
 * ```
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Core
 */
function axiosRetry(axios: AxiosInstance, options?: Partial<AxiosRetryOptions>): void {
  const resolvedOptions = getOptions(options);

  /* oxlint-disable-next-line eslint-plugin-jsdoc(require-returns) */
  function shouldRetry(code: number): boolean {
    if (typeof resolvedOptions.when === "function") return resolvedOptions.when(code);

    return resolvedOptions.when.includes(code);
  }

  axios.interceptors.response.use(
    function onFulfilled(response) {
      if (!response.config || !shouldRetry(response.status)) return Promise.resolve(response);

      const attempt = response.config.__axiosRetryAttempts || 0;

      if (attempt >= resolvedOptions.count) {
        resolvedOptions.onMaxRetryExceeded?.(attempt, undefined, response);
        return Promise.reject(response);
      }

      const timeout = getDelay(resolvedOptions, attempt);

      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          resolvedOptions.onRetry?.(attempt, undefined, response);

          if (attempt >= resolvedOptions.count)
            resolvedOptions.onMaxRetry?.(attempt, undefined, response);

          response.config.__axiosRetryAttempts = attempt + 1;

          return axios
            .request(response.config!)
            .then((nextResponse: AxiosResponse) => {
              resolve(nextResponse);
            })
            .catch((error: AxiosError) => {
              reject(error);
              resolvedOptions.onRetryFailed?.(attempt, error);
            });
        }, timeout);
      });
    },
    function onRejected(error: AxiosError) {
      if (!error.config || !error.response?.status || !shouldRetry(error.response.status))
        return Promise.reject(error);

      const attempt = error.config.__axiosRetryAttempts || 0;

      if (attempt >= resolvedOptions.count) {
        resolvedOptions.onMaxRetryExceeded?.(attempt, error);
        return Promise.reject(error);
      }

      const timeout = getDelay(resolvedOptions, attempt);

      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          resolvedOptions.onRetry?.(attempt, error);

          if (attempt >= resolvedOptions.count) resolvedOptions.onMaxRetry?.(attempt, error);

          error.config!.__axiosRetryAttempts = attempt + 1;

          return axios
            .request(error.config!)
            .then((response: AxiosResponse) => {
              resolve(response);
            })
            .catch((nextError: AxiosError) => {
              reject(nextError);
              resolvedOptions.onRetryFailed?.(attempt, error);
            });
        }, timeout);
      });
    }
  );
}

export { axiosRetry };
