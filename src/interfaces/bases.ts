import { StatusCode1xx } from "../utils/state_codes";

interface SuccessErrorProps {
  success: boolean
  error: boolean
}

export interface BaseResponse {
  serverMessage: string
  detail?: string
  consultedResource?: string
}

export interface GenericInformativeResponse extends BaseResponse {
  httpStatus: StatusCode1xx
}