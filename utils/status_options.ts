import { GenericClientErrorResponse, GenericRedirectionResponse, GenericSuccessfullResponse, IBasicState207, ISource203, ISources301 } from "../src/interfaces/bases";
import { Response2xxOpt, Response3xxOpt, Response4xxOpt } from "../src/methods/options_pattern";

export class StateOptions {
  // 200s
  static Status201Opt(location: string): Response2xxOpt {
    return function (props: GenericSuccessfullResponse) {
      return props.location = location
    }
  }

  static Status202Opt(requestId: string): Response2xxOpt {
    return function (props: GenericSuccessfullResponse) {
      return props.requestId = requestId
    }
  }

  static Status203Opt(source: ISource203): Response2xxOpt {
    return function (props: GenericSuccessfullResponse) {
      return props.source = source
    }
  }

  static Status207Opt(states: IBasicState207[]): Response2xxOpt {
    return function (props: GenericSuccessfullResponse) {
      return props.states = states
    }
  }

  // 300s

  static Status300Opt(options: any[]): Response3xxOpt {
    return function (props: GenericRedirectionResponse) {
      return props.options = options
    }
  }

  static Status301Opt(sources: ISources301): Response3xxOpt {
    return function (props: GenericRedirectionResponse) {
      return props.sources = sources
    }
  }

  static Status302Opt(redirectUrl: string): Response3xxOpt {
    return function (props: GenericRedirectionResponse) {
      return props.redirectUrl = redirectUrl
    }
  }

  static Status303Opt(redirectUrl: string): Response3xxOpt {
    return function (props: GenericRedirectionResponse) {
      return props.redirectUrl = redirectUrl
    }
  }

  static Status305Opt(proxyUrl: string): Response3xxOpt {
    return function (props: GenericRedirectionResponse) {
      return props.proxyUrl = proxyUrl
    }
  }

  static Status307Opt(redirectUrl: string): Response3xxOpt {
    return function (props: GenericRedirectionResponse) {
      return props.redirectUrl = redirectUrl
    }
  }

  static Status308Opt(redirectUrl: string): Response3xxOpt {
    return function (props: GenericRedirectionResponse) {
      return props.redirectUrl = redirectUrl
    }
  }

  // 400s

  static Status404Opt(notFoundResource: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.notFoundResource = notFoundResource
    }
  }

  static Status405Opt(allowedMethods: string[]): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.allowedMethods = allowedMethods
    }
  }

  static Status406Opt(allowedRepresentations: string[]): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.allowedRepresentations = allowedRepresentations
    }
  }

  static Status407Opt(authenticationType: string, realm: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.authenticationType = authenticationType, props.errorDetails!.realm = realm
    }
  }

  static Status408Opt(timeWaiting: number): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.timeWaiting = timeWaiting
    }
  }

  static Status409Opt(conflictResource: string, conflictId: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.conflictResource = conflictResource, props.errorDetails!.conflictId = conflictId
    }
  }

  static Status410Opt(goneResource: string, reason: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.goneResource = goneResource, props.errorDetails!.reason = reason
    }
  }

  static Status411Opt(): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.requiredHeader = "Content-Length"
    }
  }

  static Status413Opt(maxAllowedSize: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.maxAllowedSize = maxAllowedSize
    }
  }

  static Status414Opt(maxAllowedLength: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.maxAllowedLength = maxAllowedLength
    }
  }

  static Status415Opt(supportedMediaTypes: string[]): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.supportedMediaTypes = supportedMediaTypes
    }
  }

  static Status416Opt(requestedContentRange: string, supportedContentRange: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.requestedContentRange = requestedContentRange, props.errorDetails!.supportedContentRange = supportedContentRange
    }
  }

  static Status423Opt(lockedResource: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.lockedResource = lockedResource
    }
  }

  static Status424Opt(failedDependency: string): Response4xxOpt {
    return function (props: GenericClientErrorResponse) {
      return props.errorDetails!.failedDependency = failedDependency
    }
  }
}