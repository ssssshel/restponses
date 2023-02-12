import { StatusCode1xx, StatusCode2xx, StatusCode3xx, StatusCode4xx, StatusCode5xx } from "../utils/state_codes";
interface SuccessErrorProps {
    success: boolean;
    error: boolean;
}
export interface BaseInput {
    serverMessage?: string;
    detail?: string;
    consultedResource?: string;
}
export interface GenericInformativeResponse extends BaseInput {
    httpStatus: StatusCode1xx;
}
export interface BaseSuccessfullInput extends BaseInput {
    data?: any;
}
export interface GenericSuccessfullResponse extends BaseSuccessfullInput, SuccessErrorProps {
    httpStatus: StatusCode2xx;
    location?: string;
    requestId?: string;
    source?: ISource203;
    states?: IBasicState207[];
}
export interface ISource203 {
    name: string;
    description?: string;
    url?: string;
}
export interface IBasicState207 {
    httpStatus: number;
    serverMessage: string;
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
    errors: any;
}
export interface GenericClientErrorResponse extends BaseErrorInput, SuccessErrorProps {
    httpStatus: StatusCode4xx;
    errorDetails?: ClientErrorDetails;
}
export interface ClientErrorDetails {
    name: string;
    code: string;
    description: string;
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
    maxAllowedSize?: number;
    masAllowedLength?: number;
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
