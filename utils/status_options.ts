import { GenericClientErrorResponse, GenericRedirectionResponse, GenericSuccessfullResponse, IBasicState207, ISource203, ISources301 } from "../src/interfaces/bases";
import { Response2xxOpt, Response3xxOpt, Response4xxOpt } from "../src/methods/options_pattern";

export class StateOptions {
  // 200s
  /**
   * 
   * @param location Location of the resource created
   * @example location: "https://example.com/api/v1/users/1"
   */
  static Status201Opt(location: string): Response2xxOpt {
    return function (props: GenericSuccessfullResponse) {
      return props.location = location
    }
  }

  /**
   * 
   * @param requestId Request ID of the request that will be processed
   * @example requestId: "1234567890"
   */
  static Status202Opt(requestId: string): Response2xxOpt {
    return function (props: GenericSuccessfullResponse) {
      return props.requestId = requestId
    }
  }

  /**
   * 
   * @param source Source of the response
   * @example source: { name: "Example", description: "Example of source", url: "https://example.com" }
   */
  static Status203Opt(source: ISource203): Response2xxOpt {
    return function (props: GenericSuccessfullResponse) {
      return props.source = source
    }
  }

  /**
   * 
   * @param states Array of states
   * @example states: [{ httpStatus: 200, serverMessage: "OK", detail: "Everything is OK" }, { httpStatus: 201, serverMessage: "Created", detail: "Resource created" }]
   */
  static Status207Opt(states: IBasicState207[]): Response2xxOpt {
    return function (props: GenericSuccessfullResponse) {
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
      return props.errorDetails!.notFoundResource = notFoundResource
    }
  }

  /**
   * 
   * @param allowedMethods Array of allowed methods
   * @example allowedMethods: ["GET", "POST", "PUT", "DELETE"]
   */
  static Status405Opt(allowedMethods: string[]): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.allowedMethods = allowedMethods
    }
  }

  /**
   * 
   * @param allowedRepresentations Array of allowed representations
   * @example allowedRepresentations: ["application/json", "application/xml"]
   */
  static Status406Opt(allowedRepresentations: string[]): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.allowedRepresentations = allowedRepresentations
    }
  }

  /**
   * 
   * @param authenticationType Type of authentication
   * @param realm Realm of authentication
   * @example authenticationType: "Basic", realm: "Example"
   */
  static Status407Opt(authenticationType: string, realm: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.authenticationType = authenticationType, props.errorDetails!.realm = realm
    }
  }

  /**
   * 
   * @param timeWaiting Time in seconds to wait before retrying
   * @example timeWaiting: "60s"
   */
  static Status408Opt(timeWaiting: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.timeWaiting = timeWaiting
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
      return props.errorDetails!.conflictResource = conflictResource, props.errorDetails!.conflictId = conflictId
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
      return props.errorDetails!.goneResource = goneResource, props.errorDetails!.reason = reason
    }
  }

  /**
   * 
   * @returns Required header
   */
  static Status411Opt(): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.requiredHeader = "Content-Length"
    }
  }

  /**
   * 
   * @param maxAllowedSize Maximum allowed size
   * @example maxAllowedSize: "1MB"
   */
  static Status413Opt(maxAllowedSize: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.maxAllowedSize = maxAllowedSize
    }
  }

  /**
   * 
   * @param maxAllowedLength Maximum allowed length
   * @example maxAllowedLength: "1000"
   */
  static Status414Opt(maxAllowedLength: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.maxAllowedLength = maxAllowedLength
    }
  }

  /**
   * 
   * @param supportedMediaTypes Array of supported media types
   * @example supportedMediaTypes: ["application/json", "application/xml"]
   */
  static Status415Opt(supportedMediaTypes: string[]): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.supportedMediaTypes = supportedMediaTypes
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
      return props.errorDetails!.requestedContentRange = requestedContentRange, props.errorDetails!.supportedContentRange = supportedContentRange
    }
  }

  /**
   * 
   * @param lockedResource Resource that is locked
   * @example lockedResource: "https://example.com/api/v1/users/1"
   */
  static Status423Opt(lockedResource: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.lockedResource = lockedResource
    }
  }

  /**
   * 
   * @param failedDependency Resource that failed to be processed
   * @example failedDependency: "https://example.com/api/v1/users/1"
   */
  static Status424Opt(failedDependency: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.failedDependency = failedDependency
    }
  }
}