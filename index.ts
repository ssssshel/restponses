import { BaseErrorInput, BaseInput, BaseSuccessfulInput, GenericClientErrorResponse, GenericInformativeResponse, GenericRedirectionResponse, GenericServerErrorResponse, GenericSuccessfulResponse, IBasicState207, ISource203, ISources301 } from "./src/interfaces/bases";
import { defaultStatesContent, HttpStatus } from "./src/interfaces/status_codes_defaults";
import { StatusCode1xx, StatusCode2xx, StatusCode3xx, StatusCode4xx, StatusCode5xx } from "./src/interfaces/state_codes";
import { Response2xxOpt, Response3xxOpt, Response4xxOpt } from "./src/methods/options_pattern"

/**
 * 
 * @param statusCode HTTP Status Code: (100 Continue | 101 Switching Protocols | 102 Processing | 103 Early Hints)
 * @param input 
 * 
 */
export function Response1xxInformative(statusCode: keyof StatusCode1xx, input?: BaseInput): GenericInformativeResponse {

  const defaultValuesSelector = (): HttpStatus => {
    switch (statusCode) {
      case "100Continue":
        return defaultStatesContent["Status100Continue"]
      case "101SwitchingProtocols":
        return defaultStatesContent["Status101SwitchingProtocols"]
      case "102Processing":
        return defaultStatesContent["Status102Processing"]
      case "103EarlyHints":
        return defaultStatesContent["Status103EarlyHints"]
      default:
        return defaultStatesContent["Status100Continue"]
    }
  }

  const defaultValues = defaultValuesSelector()

  const response = {
    httpStatus: defaultValues.Code,
    serverMessage: input?.serverMessage || defaultValues.Message,
    detail: input?.detail || defaultValues.Details,
    consultedResource: input?.consultedResource
  }

  return response
}

/**
 * 
 * @param statusCode HTTP Status Code: (200 OK | 201 Created | 202 Accepted | 203 Non-Authoritative Information | 204 No Content | 205 Reset Content | 206 Partial Content | 207 Multi-Status | 208 Already Reported | 226 IM Used)
 * @param input 
 * @param statusOptions  
 * @returns 
 */
export function Response2xxSuccessful(statusCode: keyof StatusCode2xx, input?: BaseSuccessfulInput, statusOptions?: Response2xxOpt): GenericSuccessfulResponse {
  const defaultValuesSelector = (): HttpStatus => {
    switch (statusCode) {
      case "200OK":
        return defaultStatesContent["Status200OK"]
      case "201Created":
        return defaultStatesContent["Status201Created"]
      case "202Accepted":
        return defaultStatesContent["Status202Accepted"]
      case "203NonAuthoritativeInformation":
        return defaultStatesContent["Status203NonAuthoritativeInformation"]
      // case 204:
      //   return defaultStatesContent["Status204NoContent"]
      case "205ResetContent":
        return defaultStatesContent["Status205ResetContent"]
      case "206PartialContent":
        return defaultStatesContent["Status206PartialContent"]
      case "207MultiStatus":
        return defaultStatesContent["Status207MultiStatus"]
      case "208AlreadyReported":
        return defaultStatesContent["Status208AlreadyReported"]
      case "226IMUsed":
        return defaultStatesContent["Status226IMUsed"]
      default:
        return defaultStatesContent["Status200OK"]
    }
  }

  const defaultValues = defaultValuesSelector()

  let response: GenericSuccessfulResponse = {
    httpStatus: defaultValues.Code,
    serverMessage: input?.serverMessage || defaultValues.Message,
    detail: input?.detail || defaultValues.Details,
    data: input?.data,
    consultedResource: input?.consultedResource,
    success: true,
    error: false,
  }

  statusOptions?.(response)

  if (statusCode === "204NoContent") {
    response = {
      httpStatus: 204,
      error: false,
      success: true,
    }
  }

  return response
}

/**
 * 
 * @param statusCode HTTP Status Code: (300 Multiple Choices | 301 Moved Permanently | 302 Found | 303 See Other | 304 Not Modified | 305 Use Proxy | 307 Temporary Redirect | 308 Permanent Redirect)
 * @param input 
 * @param statusOptions 
 * @returns 
 */
export function Response3xxRedirection(statusCode: keyof StatusCode3xx, input?: BaseInput, statusOptions?: Response3xxOpt): GenericRedirectionResponse {
  const defaultValuesSelector = (): HttpStatus => {
    switch (statusCode) {
      case "300MultipleChoices":
        return defaultStatesContent["Status300MultipleChoices"]
      case "301MovedPermanently":
        return defaultStatesContent["Status301MovedPermanently"]
      case "302Found":
        return defaultStatesContent["Status302Found"]
      case "303SeeOther":
        return defaultStatesContent["Status303SeeOther"]
      case "304NotModified":
        return defaultStatesContent["Status304NotModified"]
      case "305UseProxy":
        return defaultStatesContent["Status305UseProxy"]
      case "307TemporaryRedirect":
        return defaultStatesContent["Status307TemporaryRedirect"]
      case "308PermanentRedirect":
        return defaultStatesContent["Status308PermanentRedirect"]
      default:
        return defaultStatesContent["Status300MultipleChoices"]
    }
  }

  const defaultValues = defaultValuesSelector()

  let response: GenericRedirectionResponse = {
    httpStatus: defaultValues.Code,
    serverMessage: input?.serverMessage || defaultValues.Message,
    detail: input?.detail || defaultValues.Details,
    consultedResource: input?.consultedResource,
  }

  statusOptions?.(response)

  return response
}

/**
 * 
 * @param statusCode HTTP Status Code: (400 Bad Request | 401 Unauthorized | 402 Payment Required | 403 Forbidden | 404 Not Found | 405 Method Not Allowed | 406 Not Acceptable | 407 Proxy Authentication Required | 408 Request Timeout | 409 Conflict | 410 Gone | 411 Length Required | 412 Precondition Failed | 413 Payload Too Large | 414 URI Too Long | 415 Unsupported Media Type | 416 Range Not Satisfiable | 417 Expectation Failed | 418 I'm a teapot | 421 Misdirected Request | 422 Unprocessable Entity | 423 Locked | 424 Failed Dependency | 425 Unnasigned | 426 Upgrade Required | 428 Precondition Required | 429 Too Many Requests | 431 Request Header Fields Too Large | 451 Unavailable For Legal Reasons)
 * @param input 
 * @param statusOptions 
 * @returns 
 */
export function Response4xxClientError(statusCode: keyof StatusCode4xx, input?: BaseErrorInput, statusOptions?: Response4xxOpt): GenericClientErrorResponse {
  const defaultValuesSelector = (): HttpStatus => {
    switch (statusCode) {
      case "400BadRequest":
        return defaultStatesContent["Status400BadRequest"]
      case "401Unauthorized":
        return defaultStatesContent["Status401Unauthorized"]
      case "402PaymentRequired":
        return defaultStatesContent["Status402PaymentRequired"]
      case "403Forbidden":
        return defaultStatesContent["Status403Forbidden"]
      case "404NotFound":
        return defaultStatesContent["Status404NotFound"]
      case "405MethodNotAllowed":
        return defaultStatesContent["Status405MethodNotAllowed"]
      case "406NotAcceptable":
        return defaultStatesContent["Status406NotAcceptable"]
      case "407ProxyAuthenticationRequired":
        return defaultStatesContent["Status407ProxyAuthenticationRequired"]
      case "408RequestTimeout":
        return defaultStatesContent["Status408RequestTimeout"]
      case "409Conflict":
        return defaultStatesContent["Status409Conflict"]
      case "410Gone":
        return defaultStatesContent["Status410Gone"]
      case "411LengthRequired":
        return defaultStatesContent["Status411LengthRequired"]
      case "412PreconditionFailed":
        return defaultStatesContent["Status412PreconditionFailed"]
      case "413PayloadTooLarge":
        return defaultStatesContent["Status413PayloadTooLarge"]
      case "414URITooLong":
        return defaultStatesContent["Status414URITooLong"]
      case "415UnsupportedMediaType":
        return defaultStatesContent["Status415UnsupportedMediaType"]
      case "416RangeNotSatisfiable":
        return defaultStatesContent["Status416RangeNotSatisfiable"]
      case "417ExpectationFailed":
        return defaultStatesContent["Status417ExpectationFailed"]
      case "418ImATeapot":
        return defaultStatesContent["Status418ImATeapot"]
      case "421MisdirectedRequest":
        return defaultStatesContent["Status421MisdirectedRequest"]
      case "422UnprocessableEntity":
        return defaultStatesContent["Status422UnprocessableEntity"]
      case "423Locked":
        return defaultStatesContent["Status423Locked"]
      case "424FailedDependency":
        return defaultStatesContent["Status424FailedDependency"]
      case "425TooEarly":
        return defaultStatesContent["Status425TooEarly"]
      case "426UpgradeRequired":
        return defaultStatesContent["Status426UpgradeRequired"]
      case "428PreconditionRequired":
        return defaultStatesContent["Status428PreconditionRequired"]
      case "429TooManyRequests":
        return defaultStatesContent["Status429TooManyRequests"]
      case "431RequestHeaderFieldsTooLarge":
        return defaultStatesContent["Status431RequestHeaderFieldsTooLarge"]
      case "451UnavailableForLegalReasons":
        return defaultStatesContent["Status451UnavailableForLegalReasons"]
      default:
        return defaultStatesContent["Status400BadRequest"]
    }
  }

  const defaultValues = defaultValuesSelector()

  let response: GenericClientErrorResponse = {
    httpStatus: defaultValues.Code,
    serverMessage: input?.serverMessage || defaultValues.Message,
    // detail: input?.detail || defaultValues.Details,
    consultedResource: input?.consultedResource,

    errors: input?.errors,
    errorCode: input?.errorCode,
    errorDescription: input?.errorDescription,
    errorName: input?.errorName,

    errorDetails: {},

    error: true,
    success: false
  }

  statusOptions?.(response)

  return response

}

/**
 * 
 * @param statusCode HTTP Status Code: (500 Internal Server Error | 501 Not Implemented | 502 Bad Gateway | 503 Service Unavailable | 504 Gateway Timeout | 505 HTTP Version Not Supported | 506 Variant Also Negotiates | 507 Insufficient Storage | 508 Loop Detected | 509 Bandwidth Limit Exceeded | 510 Not Extended | 511 Network Authentication Required | 521 Web Server Is Down)
 * @param input 
 * @returns 
 */
export function Response5xxServerError(statusCode: keyof StatusCode5xx, input?: BaseErrorInput): GenericServerErrorResponse {
  const defaultValuesSelector = (): HttpStatus => {
    switch (statusCode) {
      case "500InternalServerError":
        return defaultStatesContent["Status500InternalServerError"]
      case "501NotImplemented":
        return defaultStatesContent["Status501NotImplemented"]
      case "502BadGateway":
        return defaultStatesContent["Status502BadGateway"]
      case "503ServiceUnavailable":
        return defaultStatesContent["Status503ServiceUnavailable"]
      case "504GatewayTimeout":
        return defaultStatesContent["Status504GatewayTimeout"]
      case "505HTTPVersionNotSupported":
        return defaultStatesContent["Status505HTTPVersionNotSupported"]
      case "506VariantAlsoNegotiates":
        return defaultStatesContent["Status506VariantAlsoNegotiates"]
      case "507InsufficientStorage":
        return defaultStatesContent["Status507InsufficientStorage"]
      case "508LoopDetected":
        return defaultStatesContent["Status508LoopDetected"]
      case "509BandwidthLimitExceeded":
        return defaultStatesContent["Status509BandwidthLimitExceeded"]
      case "510NotExtended":
        return defaultStatesContent["Status510NotExtended"]
      case "511NetworkAuthenticationRequired":
        return defaultStatesContent["Status511NetworkAuthenticationRequired"]
      case "521ConnectionTimedOut":
        return defaultStatesContent["Status521WebServerIsDown"]
      default:
        return defaultStatesContent["Status500InternalServerError"]
    }
  }

  let response: GenericServerErrorResponse = {
    httpStatus: defaultValuesSelector().Code,
    serverMessage: input?.serverMessage || defaultValuesSelector().Message,
    detail: input?.detail || defaultValuesSelector().Details,
    consultedResource: input?.consultedResource,

    errors: input?.errors,
    errorCode: input?.errorCode,
    errorDescription: input?.errorDescription,
    errorName: input?.errorName,

    error: true,
    success: false
  }

  return response
}




export class StatusOptions {
  // 200s
  /**
   * 
   * @param location Location of the resource created
   * @example location: "https://example.com/api/v1/users/1"
   */
  static Status201Opt(location: string): Response2xxOpt {
    return function (props: GenericSuccessfulResponse) {
      return props.location = location
    }
  }

  /**
   * 
   * @param requestId Request ID of the request that will be processed
   * @example requestId: "1234567890"
   */
  static Status202Opt(requestId: string): Response2xxOpt {
    return function (props: GenericSuccessfulResponse) {
      return props.requestId = requestId
    }
  }

  /**
   * 
   * @param source Source of the response
   * @example source: { name: "Example", description: "Example of source", url: "https://example.com" }
   */
  static Status203Opt(source: ISource203): Response2xxOpt {
    return function (props: GenericSuccessfulResponse) {
      return props.source = source
    }
  }

  /**
   * 
   * @param states Array of states
   * @example states: [{ httpStatus: 200, serverMessage: "OK", detail: "Everything is OK" }, { httpStatus: 201, serverMessage: "Created", detail: "Resource created" }]
   */
  static Status207Opt(states: IBasicState207[]): Response2xxOpt {
    return function (props: GenericSuccessfulResponse) {
      return props.states = states
    }
  }

  // 300s

  /**
   * 
   * @param options Array of options
   * @example options: [{ name: "Option 1", description: "Description of option 1" }, { name: "Option 2", description: "Description of option 2" }]
   */
  static Status300Opt(options: any[]): Response3xxOpt {
    return function (props: GenericRedirectionResponse) {
      return props.options = options
    }
  }

  /**
   * 
   * @param sources Object with the old and new source
   * @example sources: { oldSource: "https://example.com/api/v1/users", newSource: "https://example.com/api/v2/users" }
   */
  static Status301Opt(sources: ISources301): Response3xxOpt {
    return function (props: GenericRedirectionResponse) {
      return props.sources = sources
    }
  }

  /**
   * 
   * @param redirectUrl URL to which the client should be redirected
   * @example redirectUrl: "https://example.com/api/v1/users"
   */
  static Status302Opt(redirectUrl: string): Response3xxOpt {
    return function (props: GenericRedirectionResponse) {
      return props.redirectUrl = redirectUrl
    }
  }

  /**
   * 
   * @param redirectUrl URL to which the client should be redirected
   * @example redirectUrl: "https://example.com/api/v1/users"
   */
  static Status303Opt(redirectUrl: string): Response3xxOpt {
    return function (props: GenericRedirectionResponse) {
      return props.redirectUrl = redirectUrl
    }
  }

  /**
   * 
   * @param proxyUrl URL of the proxy server
   * @example proxyUrl: "https://example.com/api/v1/users"
   */
  static Status305Opt(proxyUrl: string): Response3xxOpt {
    return function (props: GenericRedirectionResponse) {
      return props.proxyUrl = proxyUrl
    }
  }

  /**
   * 
   * @param redirectUrl URL to which the client should be redirected
   * @example redirectUrl: "https://example.com/api/v1/users"
   */
  static Status307Opt(redirectUrl: string): Response3xxOpt {
    return function (props: GenericRedirectionResponse) {
      return props.redirectUrl = redirectUrl
    }
  }

  /**
   * 
   * @param redirectUrl URL to which the client should be redirected
   * @example redirectUrl: "https://example.com/api/v1/users"
   */
  static Status308Opt(redirectUrl: string): Response3xxOpt {
    return function (props: GenericRedirectionResponse) {
      return props.redirectUrl = redirectUrl
    }
  }

  // 400s

  /**
   * 
   * @param notFoundResource Resource that was not found
   * @example notFoundResource: "https://example.com/api/v1/users/1"
   */
  static Status404Opt(notFoundResource: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails.notFoundResource = notFoundResource
    }
  }

  /**
   * 
   * @param allowedMethods Array of allowed methods
   * @example allowedMethods: ["GET", "POST", "PUT", "DELETE"]
   */
  static Status405Opt(allowedMethods: string[]): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails.allowedMethods = allowedMethods
    }
  }

  /**
   * 
   * @param allowedRepresentations Array of allowed representations
   * @example allowedRepresentations: ["application/json", "application/xml"]
   */
  static Status406Opt(allowedRepresentations: string[]): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails.allowedRepresentations = allowedRepresentations
    }
  }

  /**
   * 
   * @param authenticationType Type of authentication
   * @param realm Realm or domain of authentication
   * @example authenticationType: "Basic", realm: "Example"
   */
  static Status407Opt(authenticationType: string, realm: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails.authenticationType = authenticationType, props.errorDetails!.realm = realm
    }
  }

  /**
   * 
   * @param timeWaiting Time in seconds to wait before retrying
   * @example timeWaiting: "60s"
   */
  static Status408Opt(timeWaiting: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails.timeWaiting = timeWaiting
    }
  }

  /**
   * 
   * @param conflictResource Resource that caused the conflict
   * @param conflictId ID of the conflict
   * @example conflictResource: "https://example.com/api/v1/users/1", conflictId: "1"
   */
  static Status409Opt(conflictResource: string, conflictId: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails.conflictResource = conflictResource, props.errorDetails!.conflictId = conflictId
    }
  }

  /**
   * 
   * @param goneResource Resource that is no longer available
   * @param reason Reason why the resource is no longer available
   * @example goneResource: "https://example.com/api/v1/users/1", reason: "User was deleted"
   */
  static Status410Opt(goneResource: string, reason: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails.goneResource = goneResource, props.errorDetails!.reason = reason
    }
  }

  /**
   * 
   * @returns Required header
   */
  static Status411Opt(): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails.requiredHeader = "Content-Length"
    }
  }

  /**
   * 
   * @param maxAllowedSize Maximum allowed size
   * @example maxAllowedSize: "1MB"
   */
  static Status413Opt(maxAllowedSize: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails.maxAllowedSize = maxAllowedSize
    }
  }

  /**
   * 
   * @param maxAllowedLength Maximum allowed length
   * @example maxAllowedLength: "1000"
   */
  static Status414Opt(maxAllowedLength: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails.maxAllowedLength = maxAllowedLength
    }
  }

  /**
   * 
   * @param supportedMediaTypes Array of supported media types
   * @example supportedMediaTypes: ["application/json", "application/xml"]
   */
  static Status415Opt(supportedMediaTypes: string[]): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails.supportedMediaTypes = supportedMediaTypes
    }
  }

  /**
   * 
   * @param requestedContentRange  Content range requested by the client
   * @param supportedContentRange  Content range supported by the server
   * @example requestedContentRange: "bytes=0-100", supportedContentRange: "bytes=0-1000"
   */
  static Status416Opt(requestedContentRange: string, supportedContentRange: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails.requestedContentRange = requestedContentRange, props.errorDetails!.supportedContentRange = supportedContentRange
    }
  }

  /**
   * 
   * @param lockedResource Resource that is locked
   * @example lockedResource: "https://example.com/api/v1/users/1"
   */
  static Status423Opt(lockedResource: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails.lockedResource = lockedResource
    }
  }

  /**
   * 
   * @param failedDependency Resource that failed to be processed
   * @example failedDependency: "https://example.com/api/v1/users/1"
   */
  static Status424Opt(failedDependency: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails.failedDependency = failedDependency
    }
  }
}