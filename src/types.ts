import type { AxiosError, AxiosResponse } from "axios";

/**
 * Lifecycle for retries
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Types
 */
type AxiosRetryEvents = {
  /**
   * Whenever a retry will happen
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  onRetry: (attempts: number, error?: AxiosError, response?: AxiosResponse) => void;
  /**
   * If a retry fails for some reason
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  onRetryFailed: (attempts: number, error: AxiosError) => void;
  /**
   * If the last retry is called
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  onMaxRetry: (attempts: number, error?: AxiosError, response?: AxiosResponse) => void;
  /**
   * If a retry was called but exceeds the retry count
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  onMaxRetryExceeded: (attempts: number, error?: AxiosError, response?: AxiosResponse) => void;
};

/**
 * A simple function to determine based on a HTTP response code if a retry will be made.
 * @param response - Previous HTTP response
 * @returns If a retry should be made
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Types
 */
type AxiosRetryWhenFn = (response: AxiosResponse) => boolean;

/**
 * Available strategies for retrying
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Types
 */
type AxiosRetryOptionsType = "linear" | "exponential";

/**
 * Options to configure the retry behavior
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Types
 */
type AxiosRetryOptions = {
  /**
   * Check {@link AxiosRetryOptionsType}
   */
  type: AxiosRetryOptionsType;
  /**
   * Max count of retries, that'll be made
   * @default `3`
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  count: number;
  /**
   * Delay between retries in relation to `type`
   * @default `3000` for linear and `1000` for exponential
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  delay: number;
  /**
   * `Array` of HTTP status codes or {@link AxiosRetryWhenFn} to determine when a retry should happen.
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  when: number[] | AxiosRetryWhenFn;
} & Partial<AxiosRetryEvents>;

export type { AxiosRetryEvents, AxiosRetryWhenFn, AxiosRetryOptionsType, AxiosRetryOptions };
