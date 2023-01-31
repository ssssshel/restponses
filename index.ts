import { BaseInput, BaseSuccessfullInput, GenericInformativeResponse, GenericSuccessfullResponse } from "./src/interfaces/bases";
import { defaultStatesContent, HttpStatus } from "./src/interfaces/status_codes";
import { StatusCode1xx, StatusCode2xx } from "./src/utils/state_codes";
import { Response2xxOpt } from "./src/methods/options_pattern"


export function Response1xxInformative(statusCode: StatusCode1xx, input: BaseInput): GenericInformativeResponse {

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

export function Response2xzSuccessfull(statusCode: StatusCode2xx, input: BaseSuccessfullInput, statusOptions: Response2xxOpt): GenericSuccessfullResponse {
  const defaultValuesSelector = (): HttpStatus => {
    switch (statusCode) {
      case 200:
        return defaultStatesContent["Status200OK"]
      case 201:
        return defaultStatesContent["Status201Created"]
      case 202:
        return defaultStatesContent["Status202Accepted"]
      case 203:
        return defaultStatesContent["Status203NonAuthoritativeInformation"]
      case 204:
        return defaultStatesContent["Status204NoContent"]
      case 205:
        return defaultStatesContent["Status205ResetContent"]
      case 206:
        return defaultStatesContent["Status206PartialContent"]
      case 207:
        return defaultStatesContent["Status207MultiStatus"]
      case 208:
        return defaultStatesContent["Status208AlreadyReported"]
      case 226:
        return defaultStatesContent["Status226IMUsed"]
      default:
        return defaultStatesContent["Status200OK"]
    }
  }

  const defaultValues = defaultValuesSelector()

  let response: GenericSuccessfullResponse = {
    httpStatus: statusCode,
    serverMessage: input.serverMessage || defaultValues.Message,
    detail: input.detail || defaultValues.Details,
    consultedResource: input.consultedResource,
    success: true,
    error: false,
  }

  statusOptions(response)

  console.log({ response })

  return response
}

export function Response3xxRedirection() {

}

export function Response4xxClientError() {

}

export function Response5xxServerError() {

}