import { BaseErrorInput, BaseInput, BaseSuccessfullInput, GenericClientErrorResponse, GenericInformativeResponse, GenericRedirectionResponse, GenericServerErrorResponse, GenericSuccessfullResponse } from "./src/interfaces/bases";
import { StatusCode1xx, StatusCode2xx, StatusCode3xx, StatusCode4xx, StatusCode5xx } from "./utils/state_codes";
import { Response2xxOpt, Response3xxOpt, Response4xxOpt } from "./src/methods/options_pattern";
/**
 *
 * @param statusCode HTTP Status Code
 * @param input
 *
 */
export declare function Response1xxInformative(statusCode: StatusCode1xx, input: BaseInput): GenericInformativeResponse;
/**
 *
 * @param statusCode HTTP Status Code
 * @param input
 * @param statusOptions
 * @returns
 */
export declare function Response2xzSuccessfull(statusCode: StatusCode2xx, input?: BaseSuccessfullInput, statusOptions?: Response2xxOpt): GenericSuccessfullResponse;
/**
 *
 * @param statusCode HTTP Status Code
 * @param input
 * @param statusOptions
 * @returns
 */
export declare function Response3xxRedirection(statusCode: StatusCode3xx, input?: BaseInput, statusOptions?: Response3xxOpt): GenericRedirectionResponse;
/**
 *
 * @param statusCode HTTP Status Code
 * @param input
 * @param statusOptions
 * @returns
 */
export declare function Response4xxClientError(statusCode: StatusCode4xx, input?: BaseErrorInput, statusOptions?: Response4xxOpt): GenericClientErrorResponse;
/**
 *
 * @param statusCode HTTP Status Code
 * @param input
 * @returns
 */
export declare function Response5xxServerError(statusCode: StatusCode5xx, input?: BaseErrorInput): GenericServerErrorResponse;
