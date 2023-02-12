import { BaseErrorInput, BaseInput, BaseSuccessfullInput, GenericClientErrorResponse, GenericInformativeResponse, GenericRedirectionResponse, GenericServerErrorResponse, GenericSuccessfullResponse } from "./src/interfaces/bases";
import { defaultStatesContent, HttpStatus } from "./src/interfaces/status_codes";
import { StatusCode1xx, StatusCode2xx, StatusCode3xx, StatusCode4xx, StatusCode5xx } from "./utils/state_codes";
import { Response2xxOpt, Response3xxOpt, Response4xxOpt } from "./src/methods/options_pattern"


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

  const response = {
    httpStatus: statusCode,
    serverMessage: input.serverMessage || defaultValues.Message,
    detail: input.detail || defaultValues.Details,
    consultedResource: input.consultedResource
  }

  return response
}

export function Response2xzSuccessfull(statusCode: StatusCode2xx, input?: BaseSuccessfullInput, statusOptions?: Response2xxOpt): GenericSuccessfullResponse {
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
    serverMessage: input?.serverMessage || defaultValues.Message,
    detail: input?.detail || defaultValues.Details,
    consultedResource: input?.consultedResource,
    success: true,
    error: false,
  }

  statusOptions?.(response)

  return response
}

export function Response3xxRedirection(statusCode: StatusCode3xx, input?: BaseInput, statusOptions?: Response3xxOpt): GenericRedirectionResponse {
  const defaultValuesSelector = (): HttpStatus => {
    switch (statusCode) {
      case 300:
        return defaultStatesContent["Status300MultipleChoices"]
      case 301:
        return defaultStatesContent["Status301MovedPermanently"]
      case 302:
        return defaultStatesContent["Status302Found"]
      case 303:
        return defaultStatesContent["Status303SeeOther"]
      case 304:
        return defaultStatesContent["Status304NotModified"]
      case 305:
        return defaultStatesContent["Status305UseProxy"]
      case 307:
        return defaultStatesContent["Status307TemporaryRedirect"]
      case 308:
        return defaultStatesContent["Status308PermanentRedirect"]
      default:
        return defaultStatesContent["Status300MultipleChoices"]
    }
  }

  const defaultValues = defaultValuesSelector()

  let response: GenericRedirectionResponse = {
    httpStatus: statusCode,
    serverMessage: input?.serverMessage || defaultValues.Message,
    detail: input?.detail || defaultValues.Details,
    consultedResource: input?.consultedResource,
  }

  statusOptions?.(response)

  return response
}

export function Response4xxClientError(statusCode: StatusCode4xx, input?: BaseErrorInput, statusOptions?: Response4xxOpt): GenericClientErrorResponse {
  const defaultValuesSelector = (): HttpStatus => {
    switch (statusCode) {
      case 400:
        return defaultStatesContent["Status400BadRequest"]
      case 401:
        return defaultStatesContent["Status401Unauthorized"]
      case 402:
        return defaultStatesContent["Status402PaymentRequired"]
      case 403:
        return defaultStatesContent["Status403Forbidden"]
      case 404:
        return defaultStatesContent["Status404NotFound"]
      case 405:
        return defaultStatesContent["Status405MethodNotAllowed"]
      case 406:
        return defaultStatesContent["Status406NotAcceptable"]
      case 407:
        return defaultStatesContent["Status407ProxyAuthenticationRequired"]
      case 408:
        return defaultStatesContent["Status408RequestTimeout"]
      case 409:
        return defaultStatesContent["Status409Conflict"]
      case 410:
        return defaultStatesContent["Status410Gone"]
      case 411:
        return defaultStatesContent["Status411LengthRequired"]
      case 412:
        return defaultStatesContent["Status412PreconditionFailed"]
      case 413:
        return defaultStatesContent["Status413PayloadTooLarge"]
      case 414:
        return defaultStatesContent["Status414URITooLong"]
      case 415:
        return defaultStatesContent["Status415UnsupportedMediaType"]
      case 416:
        return defaultStatesContent["Status416RangeNotSatisfiable"]
      case 417:
        return defaultStatesContent["Status417ExpectationFailed"]
      case 418:
        return defaultStatesContent["Status418ImATeapot"]
      case 421:
        return defaultStatesContent["Status421MisdirectedRequest"]
      case 422:
        return defaultStatesContent["Status422UnprocessableEntity"]
      case 423:
        return defaultStatesContent["Status423Locked"]
      case 424:
        return defaultStatesContent["Status424FailedDependency"]
      case 425:
        return defaultStatesContent["Status425TooEarly"]
      case 426:
        return defaultStatesContent["Status426UpgradeRequired"]
      case 428:
        return defaultStatesContent["Status428PreconditionRequired"]
      case 429:
        return defaultStatesContent["Status429TooManyRequests"]
      case 431:
        return defaultStatesContent["Status431RequestHeaderFieldsTooLarge"]
      case 451:
        return defaultStatesContent["Status451UnavailableForLegalReasons"]
      default:
        return defaultStatesContent["Status400BadRequest"]
    }
  }

  const defaultValues = defaultValuesSelector()

  let response: GenericClientErrorResponse = {
    httpStatus: statusCode,
    serverMessage: input?.serverMessage || defaultValues.Message,
    // detail: input?.detail || defaultValues.Details,
    consultedResource: input?.consultedResource,

    errors: input?.errors,
    error: true,
    success: false
  }

  statusOptions?.(response)

  return response

}

export function Response5xxServerError(statusCode: StatusCode5xx, input?: BaseErrorInput): GenericServerErrorResponse {
  const defaultValuesSelector = (): HttpStatus => {
    switch (statusCode) {
      case 500:
        return defaultStatesContent["Status500InternalServerError"]
      case 501:
        return defaultStatesContent["Status501NotImplemented"]
      case 502:
        return defaultStatesContent["Status502BadGateway"]
      case 503:
        return defaultStatesContent["Status503ServiceUnavailable"]
      case 504:
        return defaultStatesContent["Status504GatewayTimeout"]
      case 505:
        return defaultStatesContent["Status505HTTPVersionNotSupported"]
      case 506:
        return defaultStatesContent["Status506VariantAlsoNegotiates"]
      case 507:
        return defaultStatesContent["Status507InsufficientStorage"]
      case 508:
        return defaultStatesContent["Status508LoopDetected"]
      case 509:
        return defaultStatesContent["Status509BandwidthLimitExceeded"]
      case 510:
        return defaultStatesContent["Status510NotExtended"]
      case 511:
        return defaultStatesContent["Status511NetworkAuthenticationRequired"]
      case 521:
        return defaultStatesContent["Status521WebServerIsDown"]
      default:
        return defaultStatesContent["Status500InternalServerError"]
    }
  }

  let response: GenericServerErrorResponse = {
    httpStatus: statusCode,
    serverMessage: input?.serverMessage || defaultValuesSelector().Message,
    detail: input?.detail || defaultValuesSelector().Details,
    consultedResource: input?.consultedResource,

    errors: input?.errors,
    error: true,
    success: false
  }

  return response
}