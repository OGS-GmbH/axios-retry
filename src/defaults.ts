import type { AxiosRetryOptionsType, AxiosRetryWhenFn } from "./types.js";

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
 * @param code - HTTP status code
 * @returns If a retry should be made
 * @remarks Retries if HTTP status code isn't `408`, `429` or `>=500`
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Defaults
 */
const axiosRetryDefaultWhen: AxiosRetryWhenFn = function (code) {
  return code !== 408 && code !== 429 && code < 500;
};

export {
  AXIOS_RETRY_DEFAULT_LINEAR_DELAY,
  AXIOS_RETRY_DEFAULT_EXPONENTIAL_DELAY,
  AXIOS_RETRY_DEFAULT_COUNT,
  AXIOS_RETRY_DEFAULT_TYPE,
  axiosRetryDefaultWhen
};
