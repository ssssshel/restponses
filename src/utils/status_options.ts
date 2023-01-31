import { GenericSuccessfullResponse } from "../interfaces/bases";
import { Response2xxOpt } from "../methods/options_pattern";

export function Status201Opt(location: string): Response2xxOpt {
  return function (props: GenericSuccessfullResponse) {
    return props.location = location
  }


}