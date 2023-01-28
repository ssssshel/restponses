import { BaseResponse, GenericInformativeResponse } from "./src/interfaces/bases";
import { defaultStatesContent } from "./src/interfaces/status_codes";
import { StatusCode1xx } from "./src/utils/state_codes";


export function Response1xxInformative(statusCode: StatusCode1xx, input: BaseResponse): GenericInformativeResponse {

  let defaultValues

  switch (statusCode) {
    case 100:
      defaultValues = defaultStatesContent["Status100Continue"]
      break;

    default:
      break;
  }
  const f = defaultStatesContent["Status100Continue"]
  console.log({ f })

  return {
    httpStatus: statusCode,
    serverMessage: input.serverMessage,
    detail: input.detail,
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