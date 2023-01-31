import { StatusCode1xx, StatusCode2xx } from "../utils/state_codes";

interface SuccessErrorProps {
  success: boolean
  error: boolean
}

// 100s
export interface BaseInput {
  serverMessage?: string
  detail?: string
  consultedResource?: string
}

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

interface ISource203 {
  name: string
  description: string
  url: string
}

interface IBasicState207 {
  httpStatus: number
  serverMessage: string
  detail: string
}

// 300s