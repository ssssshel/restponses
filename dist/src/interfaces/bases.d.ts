import { StatusCode1xx, StatusCode2xx, StatusCode3xx, StatusCode4xx, StatusCode5xx } from "../../utils/state_codes";
interface SuccessErrorProps {
    success: boolean;
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
    httpStatus: StatusCode1xx;
}
export interface BaseSuccessfullInput extends BaseInput {
    /**
     * Data that the server will send to the client
     */
    data?: any;
}
export interface GenericSuccessfullResponse extends BaseSuccessfullInput, SuccessErrorProps {
    httpStatus: StatusCode2xx;
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
    httpStatus: StatusCode3xx;
    options?: any[];
    sources?: ISources301[];
    redirectUrl?: string;
    proxyUrl?: string;
}
export interface ISources301 {
    oldSource: string;
    newSource: string;
}
export interface BaseErrorInput extends BaseInput {
    errors?: any;
    errorName?: string;
    errorCode?: string;
    errorDescription?: string;
}
export interface GenericClientErrorResponse extends BaseErrorInput, SuccessErrorProps {
    httpStatus: StatusCode4xx;
    errorDetails?: ClientErrorDetails;
}
export interface ClientErrorDetails {
    notFoundResource?: string;
    allowedMethods?: string[];
    allowedRepresentations?: string[];
    authenticationType?: string;
    realm?: string;
    timeWaiting?: number;
    conflictResource?: string;
    conflictId?: string;
    goneResource?: string;
    reason?: string;
    requiredHeader?: string;
    maxAllowedSize?: string;
    maxAllowedLength?: string;
    supportedMediaTypes?: string[];
    requestedContentRange?: string;
    supportedContentRange?: string;
    lockedResource?: string;
    failedDependency?: string;
}
export interface GenericServerErrorResponse extends BaseErrorInput, SuccessErrorProps {
    httpStatus: StatusCode5xx;
}
export {};
