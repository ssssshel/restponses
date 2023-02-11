import { StatusCode1xx, StatusCode2xx, StatusCode3xx, StatusCode4xx, StatusCode5xx } from "../utils/state_codes";

interface SuccessErrorProps {
  success: boolean
  error: boolean
}

export interface BaseInput {
  serverMessage?: string
  detail?: string
  consultedResource?: string
}

// 100s

export interface GenericInformativeResponse extends BaseInput {
  httpStatus: StatusCode1xx
}

// 200s
export interface BaseSuccessfullInput extends BaseInput {
  data?: any
}

export interface GenericSuccessfullResponse extends BaseSuccessfullInput, SuccessErrorProps {
  httpStatus: StatusCode2xx

  location?: string //201 ONLY | URL or place where your creation can be found
  requestId?: string //202 ONLY | ID with which you can consult the status of the request
  source?: ISource203 //203 ONLY | Source of the response
  states?: IBasicState207[] //207 ONLY | Array of states
}

export interface ISource203 {
  name: string
  description?: string
  url?: string
}

export interface IBasicState207 {
  httpStatus: number
  serverMessage: string
  detail?: string
}

// 300s

export interface GenericRedirectionResponse extends BaseInput {
  httpStatus: StatusCode3xx

  options?: any[] // 300 ONLY | Array of options,
  sources?: ISources301[] // 301 ONLY
  /*
      Redirect for multiple states:
       - 302 => Temporary redirect URL
       - 303 => URL to which the GET request should be made
       - 307 => Temporary redirect URL that should be queried with the same HTTP method
       - 308 => Permanent redirect URL that should be queried with tha same HTTP method
    */
  redirectUrl?: string
  proxyUrl?: string // 305 ONLY | URL of the proxy
}

export interface ISources301 {
  oldSource: string
  newSource: string
}

// 400s

export interface BaseErrorInput extends BaseInput {
  errors: any
}

export interface GenericClientErrorResponse extends BaseErrorInput, SuccessErrorProps {
  httpStatus: StatusCode4xx
  errorDetails?: ClientErrorDetails
}

export interface ClientErrorDetails {
  name: string // Error name | e.g., "Resource api/potato not found"
  code: string  // Error code | e.g., "ERR_NOT_FOUND"
  description: string // Error description | e.g., "The requested resource could not be found"

  notFoundResource?: string // 404 ONLY | Resource that was not found | e.g., "api/potato"
  allowedMethods?: string[] // 405 ONLY | Allowed methods | e.g., ["GET", "POST"]
  allowedRepresentations?: string[] // 406 ONLY | Allowed representations | e.g., ["application/json", "application/xml"]
  authenticationType?: string // 407 ONLY | Authentication type | e.g., "Bearer"
  realm?: string // 407 ONLY | Domain to which auth was requested | e.g., "proxy.potato.com"
  timeWaiting?: number // 408 ONLY | Time waiting | e.g., 10s
  conflictResource?: string // 409 ONLY | Resource that caused the conflict | e.g., "api/potato"
  conflictId?: string // 409 ONLY | ID of the conflict | e.g., "123456789"
  goneResource?: string // 410 ONLY | Resource that is gone | e.g., "api/potato"
  reason?: string // 410 ONLY | Reason for the resource being gone | e.g., "The resource was deleted"
  requiredHeader?: string // 411 ONLY | Content-Length header | e.g., "Content-Length"
  maxAllowedSize?: number // 413 ONLY | Max allowed payload size | e.g., 10MB
  masAllowedLength?: number // 414 ONLY | Max allowed URI length | e.g., 3500
  supportedMediaTypes?: string[] // 415 ONLY | Supported media types | e.g., ["image/jpg", "audio/*"]
  requestedContentRange?: string // 416 ONLY | Requested content range | e.g., "bytes=0-100"
  supportedContentRange?: string // 416 ONLY | Supported content range | e.g., "bytes=0-1000"
  lockedResource?: string // 423 ONLY | Locked resource | e.g., "api/potato"
  failedDependency?: string // 424 ONLY | Failed dependency | e.g., "api/potato"
}

// 500s

export interface GenericServerErrorResponse extends BaseErrorInput, SuccessErrorProps {
  httpStatus: StatusCode5xx
}