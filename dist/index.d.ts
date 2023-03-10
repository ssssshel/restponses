import { BaseErrorInput, BaseInput, BaseSuccessfullInput, GenericClientErrorResponse, GenericInformativeResponse, GenericRedirectionResponse, GenericServerErrorResponse, GenericSuccessfullResponse, IBasicState207, ISource203, ISources301 } from "./src/interfaces/bases";
import { StatusCode1xx, StatusCode2xx, StatusCode3xx, StatusCode4xx, StatusCode5xx } from "./src/interfaces/state_codes";
import { Response2xxOpt, Response3xxOpt, Response4xxOpt } from "./src/methods/options_pattern";
/**
 *
 * @param statusCode HTTP Status Code: (100 Continue | 101 Switching Protocols | 102 Processing | 103 Early Hints)
 * @param input
 *
 */
export declare function Response1xxInformative(statusCode: keyof StatusCode1xx, input?: BaseInput): GenericInformativeResponse;
/**
 *
 * @param statusCode HTTP Status Code: (200 OK | 201 Created | 202 Accepted | 203 Non-Authoritative Information | 204 No Content | 205 Reset Content | 206 Partial Content | 207 Multi-Status | 208 Already Reported | 226 IM Used)
 * @param input
 * @param statusOptions
 * @returns
 */
export declare function Response2xxSuccessful(statusCode: keyof StatusCode2xx, input?: BaseSuccessfullInput, statusOptions?: Response2xxOpt): GenericSuccessfullResponse;
/**
 *
 * @param statusCode HTTP Status Code: (300 Multiple Choices | 301 Moved Permanently | 302 Found | 303 See Other | 304 Not Modified | 305 Use Proxy | 307 Temporary Redirect | 308 Permanent Redirect)
 * @param input
 * @param statusOptions
 * @returns
 */
export declare function Response3xxRedirection(statusCode: keyof StatusCode3xx, input?: BaseInput, statusOptions?: Response3xxOpt): GenericRedirectionResponse;
/**
 *
 * @param statusCode HTTP Status Code: (400 Bad Request | 401 Unauthorized | 402 Payment Required | 403 Forbidden | 404 Not Found | 405 Method Not Allowed | 406 Not Acceptable | 407 Proxy Authentication Required | 408 Request Timeout | 409 Conflict | 410 Gone | 411 Length Required | 412 Precondition Failed | 413 Payload Too Large | 414 URI Too Long | 415 Unsupported Media Type | 416 Range Not Satisfiable | 417 Expectation Failed | 418 I'm a teapot | 421 Misdirected Request | 422 Unprocessable Entity | 423 Locked | 424 Failed Dependency | 425 Unnasigned | 426 Upgrade Required | 428 Precondition Required | 429 Too Many Requests | 431 Request Header Fields Too Large | 451 Unavailable For Legal Reasons)
 * @param input
 * @param statusOptions
 * @returns
 */
export declare function Response4xxClientError(statusCode: keyof StatusCode4xx, input?: BaseErrorInput, statusOptions?: Response4xxOpt): GenericClientErrorResponse;
/**
 *
 * @param statusCode HTTP Status Code: (500 Internal Server Error | 501 Not Implemented | 502 Bad Gateway | 503 Service Unavailable | 504 Gateway Timeout | 505 HTTP Version Not Supported | 506 Variant Also Negotiates | 507 Insufficient Storage | 508 Loop Detected | 509 Bandwidth Limit Exceeded | 510 Not Extended | 511 Network Authentication Required | 521 Web Server Is Down)
 * @param input
 * @returns
 */
export declare function Response5xxServerError(statusCode: keyof StatusCode5xx, input?: BaseErrorInput): GenericServerErrorResponse;
export declare class StatusOptions {
    /**
     *
     * @param location Location of the resource created
     * @example location: "https://example.com/api/v1/users/1"
     */
    static Status201Opt(location: string): Response2xxOpt;
    /**
     *
     * @param requestId Request ID of the request that will be processed
     * @example requestId: "1234567890"
     */
    static Status202Opt(requestId: string): Response2xxOpt;
    /**
     *
     * @param source Source of the response
     * @example source: { name: "Example", description: "Example of source", url: "https://example.com" }
     */
    static Status203Opt(source: ISource203): Response2xxOpt;
    /**
     *
     * @param states Array of states
     * @example states: [{ httpStatus: 200, serverMessage: "OK", detail: "Everything is OK" }, { httpStatus: 201, serverMessage: "Created", detail: "Resource created" }]
     */
    static Status207Opt(states: IBasicState207[]): Response2xxOpt;
    /**
     *
     * @param options Array of options
     * @example options: [{ name: "Option 1", description: "Description of option 1" }, { name: "Option 2", description: "Description of option 2" }]
     */
    static Status300Opt(options: any[]): Response3xxOpt;
    /**
     *
     * @param sources Object with the old and new source
     * @example sources: { oldSource: "https://example.com/api/v1/users", newSource: "https://example.com/api/v2/users" }
     */
    static Status301Opt(sources: ISources301): Response3xxOpt;
    /**
     *
     * @param redirectUrl URL to which the client should be redirected
     * @example redirectUrl: "https://example.com/api/v1/users"
     */
    static Status302Opt(redirectUrl: string): Response3xxOpt;
    /**
     *
     * @param redirectUrl URL to which the client should be redirected
     * @example redirectUrl: "https://example.com/api/v1/users"
     */
    static Status303Opt(redirectUrl: string): Response3xxOpt;
    /**
     *
     * @param proxyUrl URL of the proxy server
     * @example proxyUrl: "https://example.com/api/v1/users"
     */
    static Status305Opt(proxyUrl: string): Response3xxOpt;
    /**
     *
     * @param redirectUrl URL to which the client should be redirected
     * @example redirectUrl: "https://example.com/api/v1/users"
     */
    static Status307Opt(redirectUrl: string): Response3xxOpt;
    /**
     *
     * @param redirectUrl URL to which the client should be redirected
     * @example redirectUrl: "https://example.com/api/v1/users"
     */
    static Status308Opt(redirectUrl: string): Response3xxOpt;
    /**
     *
     * @param notFoundResource Resource that was not found
     * @example notFoundResource: "https://example.com/api/v1/users/1"
     */
    static Status404Opt(notFoundResource: string): Response4xxOpt;
    /**
     *
     * @param allowedMethods Array of allowed methods
     * @example allowedMethods: ["GET", "POST", "PUT", "DELETE"]
     */
    static Status405Opt(allowedMethods: string[]): Response4xxOpt;
    /**
     *
     * @param allowedRepresentations Array of allowed representations
     * @example allowedRepresentations: ["application/json", "application/xml"]
     */
    static Status406Opt(allowedRepresentations: string[]): Response4xxOpt;
    /**
     *
     * @param authenticationType Type of authentication
     * @param realm Realm or domain of authentication
     * @example authenticationType: "Basic", realm: "Example"
     */
    static Status407Opt(authenticationType: string, realm: string): Response4xxOpt;
    /**
     *
     * @param timeWaiting Time in seconds to wait before retrying
     * @example timeWaiting: "60s"
     */
    static Status408Opt(timeWaiting: string): Response4xxOpt;
    /**
     *
     * @param conflictResource Resource that caused the conflict
     * @param conflictId ID of the conflict
     * @example conflictResource: "https://example.com/api/v1/users/1", conflictId: "1"
     */
    static Status409Opt(conflictResource: string, conflictId: string): Response4xxOpt;
    /**
     *
     * @param goneResource Resource that is no longer available
     * @param reason Reason why the resource is no longer available
     * @example goneResource: "https://example.com/api/v1/users/1", reason: "User was deleted"
     */
    static Status410Opt(goneResource: string, reason: string): Response4xxOpt;
    /**
     *
     * @returns Required header
     */
    static Status411Opt(): Response4xxOpt;
    /**
     *
     * @param maxAllowedSize Maximum allowed size
     * @example maxAllowedSize: "1MB"
     */
    static Status413Opt(maxAllowedSize: string): Response4xxOpt;
    /**
     *
     * @param maxAllowedLength Maximum allowed length
     * @example maxAllowedLength: "1000"
     */
    static Status414Opt(maxAllowedLength: string): Response4xxOpt;
    /**
     *
     * @param supportedMediaTypes Array of supported media types
     * @example supportedMediaTypes: ["application/json", "application/xml"]
     */
    static Status415Opt(supportedMediaTypes: string[]): Response4xxOpt;
    /**
     *
     * @param requestedContentRange  Content range requested by the client
     * @param supportedContentRange  Content range supported by the server
     * @example requestedContentRange: "bytes=0-100", supportedContentRange: "bytes=0-1000"
     */
    static Status416Opt(requestedContentRange: string, supportedContentRange: string): Response4xxOpt;
    /**
     *
     * @param lockedResource Resource that is locked
     * @example lockedResource: "https://example.com/api/v1/users/1"
     */
    static Status423Opt(lockedResource: string): Response4xxOpt;
    /**
     *
     * @param failedDependency Resource that failed to be processed
     * @example failedDependency: "https://example.com/api/v1/users/1"
     */
    static Status424Opt(failedDependency: string): Response4xxOpt;
}
