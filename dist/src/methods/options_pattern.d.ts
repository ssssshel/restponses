import { GenericClientErrorResponse, GenericRedirectionResponse, GenericSuccessfullResponse } from "../interfaces/bases";
export type Response2xxOpt = (props: GenericSuccessfullResponse) => {};
export type Response3xxOpt = (props: GenericRedirectionResponse) => {};
export type Response4xxOpt = (props: GenericClientErrorResponse) => {};