import { BaseErrorInput, BaseInput, BaseSuccessfullInput, GenericClientErrorResponse, GenericInformativeResponse, GenericRedirectionResponse, GenericServerErrorResponse, GenericSuccessfullResponse } from "./src/interfaces/bases";
import { StatusCode1xx, StatusCode2xx, StatusCode3xx, StatusCode4xx, StatusCode5xx } from "./src/interfaces/state_codes";
import { Response2xxOpt, Response3xxOpt, Response4xxOpt } from "./src/methods/options_pattern";
/**
 *
 * @param statusCode HTTP Status Code: (100 Continue | 101 Switching Protocols | 102 Processing | 103 Early Hints)
 * @param input
 *
 */
export declare function Response1xxInformative(statusCode: StatusCode1xx, input?: BaseInput): GenericInformativeResponse;
/**
 *
 * @param statusCode HTTP Status Code: (200 OK | 201 Created | 202 Accepted | 203 Non-Authoritative Information | 204 No Content | 205 Reset Content | 206 Partial Content | 207 Multi-Status | 208 Already Reported | 226 IM Used)
 * @param input
 * @param statusOptions
 * @returns
 */
export declare function Response2xxSuccessful(statusCode: StatusCode2xx, input?: BaseSuccessfullInput, statusOptions?: Response2xxOpt): GenericSuccessfullResponse;
/**
 *
 * @param statusCode HTTP Status Code: (300 Multiple Choices | 301 Moved Permanently | 302 Found | 303 See Other | 304 Not Modified | 305 Use Proxy | 307 Temporary Redirect | 308 Permanent Redirect)
 * @param input
 * @param statusOptions
 * @returns
 */
export declare function Response3xxRedirection(statusCode: StatusCode3xx, input?: BaseInput, statusOptions?: Response3xxOpt): GenericRedirectionResponse;
/**
 *
 * @param statusCode HTTP Status Code: (400 Bad Request | 401 Unauthorized | 402 Payment Required | 403 Forbidden | 404 Not Found | 405 Method Not Allowed | 406 Not Acceptable | 407 Proxy Authentication Required | 408 Request Timeout | 409 Conflict | 410 Gone | 411 Length Required | 412 Precondition Failed | 413 Payload Too Large | 414 URI Too Long | 415 Unsupported Media Type | 416 Range Not Satisfiable | 417 Expectation Failed | 418 I'm a teapot | 421 Misdirected Request | 422 Unprocessable Entity | 423 Locked | 424 Failed Dependency | 425 Unnasigned | 426 Upgrade Required | 428 Precondition Required | 429 Too Many Requests | 431 Request Header Fields Too Large | 451 Unavailable For Legal Reasons)
 * @param input
 * @param statusOptions
 * @returns
 */
export declare function Response4xxClientError(statusCode: StatusCode4xx, input?: BaseErrorInput, statusOptions?: Response4xxOpt): GenericClientErrorResponse;
/**
 *
 * @param statusCode HTTP Status Code: (500 Internal Server Error | 501 Not Implemented | 502 Bad Gateway | 503 Service Unavailable | 504 Gateway Timeout | 505 HTTP Version Not Supported | 506 Variant Also Negotiates | 507 Insufficient Storage | 508 Loop Detected | 509 Bandwidth Limit Exceeded | 510 Not Extended | 511 Network Authentication Required | 521 Web Server Is Down)
 * @param input
 * @returns
 */
export declare function Response5xxServerError(statusCode: StatusCode5xx, input?: BaseErrorInput): GenericServerErrorResponse;
