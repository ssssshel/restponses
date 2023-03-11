import { GenericClientErrorResponse, GenericRedirectionResponse, GenericSuccessfulResponse } from "../interfaces/bases";
export type Response2xxOpt = (props: GenericSuccessfulResponse) => {};
export type Response3xxOpt = (props: GenericRedirectionResponse) => {};
export type Response4xxOpt = (props: GenericClientErrorResponse) => {};
