import { StatusCode } from "./status_codes_defaults";
interface SuccessErrorProps {
    /**
     * Indicates if the request was successful
     */
    success: boolean;
    /**
     * Indicates if the request had an error
     */
    error: boolean;
}
export interface BaseInput {
    /**
     * Message that the server will send to the client
     */
    serverMessage?: string;
    /**
     * Detail of the message that the server will send to the client
     */
    detail?: string;
    /**
     * URL or name of the resource that was consulted
     */
    consultedResource?: string;
}
export interface GenericInformativeResponse extends BaseInput {
    /**
     * HTTP Status Code
     */
    httpStatus: StatusCode;
}
export interface BaseSuccessfullInput extends BaseInput {
    /**
     * Data that the server will send to the client
     */
    data?: any;
}
export interface GenericSuccessfullResponse extends BaseSuccessfullInput, SuccessErrorProps {
    httpStatus: StatusCode;
    /**
     * 201 ONLY | URL or place where your creation can be found
     */
    location?: string;
    /**
     * 202 ONLY | ID with which you can consult the status of the request
     */
    requestId?: string;
    /**
     * 203 ONLY | Source of the response
     */
    source?: ISource203;
    /**
     * 207 ONLY | Array of states
     */
    states?: IBasicState207[];
}
export interface ISource203 {
    /**
     * Name of the source
     */
    name: string;
    /**
     * Description of the source
     */
    description?: string;
    /**
     * URL of the source
     */
    url?: string;
}
export interface IBasicState207 {
    /**
     * HTTP Status Code
     */
    httpStatus: number;
    /**
     * Message that the server will send to the client
     */
    serverMessage: string;
    /**
     * Detail of the message that the server will send to the client
     */
    detail?: string;
}
export interface GenericRedirectionResponse extends BaseInput {
    /**
     * HTTP Status Code
     */
    httpStatus: StatusCode;
    /**
     * 300 ONLY | Array of options
     * @example options: [{ name: "Option 1", description: "Description of option 1" }, { name: "Option 2", description: "Description of option 2" }]
     */
    options?: any[];
    /**
     * 301 ONLY | Object with the old and new source
     */
    sources?: ISources301;
    /**
     * Refirect for multiple states:
     * - 302 => Temporary redirect URL
     * - 303 => URL to which the GET request should be made
     * - 307 => Temporary redirect URL that should be queried with the same HTTP method
     * - 308 => Permanent redirect URL that should be queried with tha same HTTP method
     */
    redirectUrl?: string;
    /**
     * 305 ONLY | URL of the proxy
     */
    proxyUrl?: string;
}
export interface ISources301 {
    /**
     * Old source
     */
    oldSource: string;
    /**
     * New source
     */
    newSource: string;
}
export interface BaseErrorInput extends BaseInput {
    /**
     * Error/s that the server will send to the client
     */
    errors?: any;
    /**
     * Error name
     * @example errorName: "InvalidParameterError"
     */
    errorName?: string;
    /**
     *  Error code
     * @example errorCode: "INVALID_PARAMETER"
     */
    errorCode?: string;
    /**
     * Error description
     * @example errorDescription: "The parameter 'potato' is invalid"
     */
    errorDescription?: string;
}
export interface GenericClientErrorResponse extends BaseErrorInput, SuccessErrorProps {
    /**
     * HTTP Status Code
     */
    httpStatus: StatusCode;
    /**
     *  Client error details
     */
    errorDetails: ClientErrorDetails;
}
export interface ClientErrorDetails {
    /**
     * 404 ONLY | Resource that was not found
     * @example notFoundResource: "api/potato"
     */
    notFoundResource?: string;
    /**
     * 405 ONLY | Allowed methods
     * @example allowedMethods: ["GET", "POST"]
     */
    allowedMethods?: string[];
    /**
     * 406 ONLY | Allowed representations
     * @example allowedRepresentations: ["application/json", "application/xml"]
     */
    allowedRepresentations?: string[];
    /**
     * 407 ONLY | Proxy authentication type
     * @example authenticationType: "Basic"
     */
    authenticationType?: string;
    /**
     * 407 ONLY | Domain to which auth was requested
     * @example realm: "proxy.potato.com"
     */
    realm?: string;
    /**
     * 408 ONLY | Time waiting
     * @example timeWaiting: "10s"
     */
    timeWaiting?: string;
    /**
     * 409 ONLY | Resource that caused the conflict
     * @example conflictResource: "api/potato"
     */
    conflictResource?: string;
    /**
     * 409 ONLY | ID of the conflict
     * @example conflictId: "123456789"
     */
    conflictId?: string;
    /**
     * 410 ONLY | Resource that is gone
     * @example goneResource: "api/potato"
     */
    goneResource?: string;
    /**
     * 410 ONLY | Reason for the resource being gone
     * @example reason: "The resource was deleted"
     */
    reason?: string;
    /**
     * 411 ONLY | Content-Length header
     * @example requiredHeader: "Content-Length"
     */
    requiredHeader?: string;
    /**
     * 413 ONLY | Max allowed payload size
     * @example maxAllowedSize: "10MB"
     */
    maxAllowedSize?: string;
    /**
     * 414 ONLY | Max allowed URI length
     * @example maxAllowedLength: "3500"
     */
    maxAllowedLength?: string;
    /**
     * 415 ONLY | Supported media types
     * @example supportedMediaTypes: ["image/jpg", "audio/*"]
     */
    supportedMediaTypes?: string[];
    /**
     * 416 ONLY | Requested content range
     * @example requestedContentRange: "bytes=0-100"
     */
    requestedContentRange?: string;
    /**
     * 416 ONLY | Supported content range
     * @example supportedContentRange: "bytes=0-1000"
     */
    supportedContentRange?: string;
    /**
     * 423 ONLY | Locked resource
     * @example lockedResource: "api/potato"
     */
    lockedResource?: string;
    /**
     * 424 ONLY | Failed dependency
     * @example failedDependency: "api/potato"
     */
    failedDependency?: string;
}
export interface GenericServerErrorResponse extends BaseErrorInput, SuccessErrorProps {
    /**
     * HTTP Status Code
     */
    httpStatus: StatusCode;
}
export {};
