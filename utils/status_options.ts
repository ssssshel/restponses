import { GenericRedirectionResponse, GenericSuccessfullResponse, IBasicState207, ISource203, ISources301 } from "../src/interfaces/bases";
import { Response2xxOpt, Response3xxOpt } from "../src/methods/options_pattern";

// 200s

export function Status201Opt(location: string): Response2xxOpt {
  return function (props: GenericSuccessfullResponse) {
    return props.location = location
  }
}

export function Status202Opt(requestId: string): Response2xxOpt {
  return function (props: GenericSuccessfullResponse) {
    return props.requestId = requestId
  }
}

export function Status203Opt(source: ISource203): Response2xxOpt {
  return function (props: GenericSuccessfullResponse) {
    return props.source = source
  }
}

export function Status207Opt(states: IBasicState207[]): Response2xxOpt {
  return function (props: GenericSuccessfullResponse) {
    return props.states = states
  }
}

// 300s

export function Status300Opt(options: any[]): Response3xxOpt {
  return function (props: GenericRedirectionResponse) {
    return props.options = options
  }
}

export function Status301Opt(sources: ISources301[]): Response3xxOpt {
  return function (props: GenericRedirectionResponse) {
    return props.sources = sources
  }
}

export function Status302Opt(redirectUrl: string): Response3xxOpt {
  return function (props: GenericRedirectionResponse) {
    return props.redirectUrl = redirectUrl
  }
}

export function Status303Opt(redirectUrl: string): Response3xxOpt {
  return function (props: GenericRedirectionResponse) {
    return props.redirectUrl = redirectUrl
  }
}

export function Status305Opt(proxyUrl: string): Response3xxOpt {
  return function (props: GenericRedirectionResponse) {
    return props.proxyUrl = proxyUrl
  }
}

export function Status307Opt(redirectUrl: string): Response3xxOpt {
  return function (props: GenericRedirectionResponse) {
    return props.redirectUrl = redirectUrl
  }
}

export function Status308Opt(redirectUrl: string): Response3xxOpt {
  return function (props: GenericRedirectionResponse) {
    return props.redirectUrl = redirectUrl
  }
}

// 400s

// export function Status400Opt(detail: string): Response4xxOpt {
//   return function (props: GenericErrorResponse) {
//     return props.detail = detail
//   }
// }