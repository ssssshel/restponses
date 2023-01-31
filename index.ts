import { BaseResponse, GenericInformativeResponse } from "./src/interfaces/bases";
import { defaultStatesContent, HttpStatus } from "./src/interfaces/status_codes";
import { StatusCode1xx } from "./src/utils/state_codes";


export function Response1xxInformative(statusCode: StatusCode1xx, input: BaseResponse): GenericInformativeResponse {

  const defaultValuesSelector = (): HttpStatus => {
    switch (statusCode) {
      case 100:
        return defaultStatesContent["Status100Continue"]
      case 101:
        return defaultStatesContent["Status101SwitchingProtocols"]
      case 102:
        return defaultStatesContent["Status102Processing"]
      case 103:
        return defaultStatesContent["Status103EarlyHints"]
      default:
        return defaultStatesContent["Status100Continue"]
    }
  }

  const defaultValues = defaultValuesSelector()

  return {
    httpStatus: statusCode,
    serverMessage: input.serverMessage || defaultValues.Message,
    detail: input.detail || defaultValues.Details,
    consultedResource: input.consultedResource
  }
}

export function Response2xzSuccessfull() {

}

export function Response3xxRedirection() {

}

export function Response4xxClientError() {

}

export function Response5xxServerError() {

}