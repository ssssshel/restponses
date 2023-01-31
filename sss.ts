import { Response1xxInformative, Response2xzSuccessfull } from ".";
import { } from "./src/interfaces/bases";
import { Status201Opt } from "./src/utils/status_options"

const df = Response1xxInformative(10, { serverMessage: "", });

df

Response2xzSuccessfull(201, {}, Status201Opt("httpfdsaf"))
