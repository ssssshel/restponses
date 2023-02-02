import { StatusCode1xx, StatusCode2xx, StatusCode3xx } from "../utils/state_codes";

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