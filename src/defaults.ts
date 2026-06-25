import type { AxiosRetryOptionsType } from "./types.js";

/**
 * Default delay for linear retries
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Defaults
 */
const AXIOS_RETRY_DEFAULT_LINEAR_DELAY = 3000;
/**
 * Default delay for exponential retries
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Defaults
 */
const AXIOS_RETRY_DEFAULT_EXPONENTIAL_DELAY = 1000;
/**
 * Default max. count of retries
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Defaults
 */
const AXIOS_RETRY_DEFAULT_COUNT = 3;
/**
 * Default strategy for retries
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Defaults
 */
const AXIOS_RETRY_DEFAULT_TYPE: AxiosRetryOptionsType = "exponential";

/**
 * Default `when` condition to determine if a retry should be made
 * @remarks Retries if HTTP status code is `408`, `429`, `502`, `503`, `504`
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Defaults
 */
const AXIOS_RETRY_DEFAULT_WHEN: number[] = [408, 429, 502, 503, 504];

export {
  AXIOS_RETRY_DEFAULT_LINEAR_DELAY,
  AXIOS_RETRY_DEFAULT_EXPONENTIAL_DELAY,
  AXIOS_RETRY_DEFAULT_COUNT,
  AXIOS_RETRY_DEFAULT_TYPE,
  AXIOS_RETRY_DEFAULT_WHEN
};
