import { IBasicState207, ISource203, ISources301 } from "../src/interfaces/bases";
import { Response2xxOpt, Response3xxOpt, Response4xxOpt } from "../src/methods/options_pattern";
export declare class StateOptions {
    static Status201Opt(location: string): Response2xxOpt;
    static Status202Opt(requestId: string): Response2xxOpt;
    static Status203Opt(source: ISource203): Response2xxOpt;
    static Status207Opt(states: IBasicState207[]): Response2xxOpt;
    static Status300Opt(options: any[]): Response3xxOpt;
    static Status301Opt(sources: ISources301[]): Response3xxOpt;
    static Status302Opt(redirectUrl: string): Response3xxOpt;
    static Status303Opt(redirectUrl: string): Response3xxOpt;
    static Status305Opt(proxyUrl: string): Response3xxOpt;
    static Status307Opt(redirectUrl: string): Response3xxOpt;
    static Status308Opt(redirectUrl: string): Response3xxOpt;
    static Status404Opt(notFoundResource: string): Response4xxOpt;
    static Status405Opt(allowedMethods: string[]): Response4xxOpt;
    static Status406Opt(allowedRepresentations: string[]): Response4xxOpt;
    static Status407Opt(authenticationType: string, realm: string): Response4xxOpt;
    static Status408Opt(timeWaiting: number): Response4xxOpt;
    static Status409Opt(conflictResource: string, conflictId: string): Response4xxOpt;
    static Status410Opt(goneResource: string, reason: string): Response4xxOpt;
    static Status411Opt(): Response4xxOpt;
    static Status413Opt(maxAllowedSize: string): Response4xxOpt;
    static Status414Opt(maxAllowedLength: string): Response4xxOpt;
    static Status415Opt(supportedMediaTypes: string[]): Response4xxOpt;
    static Status416Opt(requestedContentRange: string, supportedContentRange: string): Response4xxOpt;
    static Status423Opt(lockedResource: string): Response4xxOpt;
    static Status424Opt(failedDependency: string): Response4xxOpt;
}
