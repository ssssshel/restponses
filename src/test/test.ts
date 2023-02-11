import { Response1xxInformative, Response2xzSuccessfull, Response3xxRedirection } from "../..";
import { Status201Opt, Status203Opt, Status207Opt, Status300Opt, Status301Opt } from "../utils/status_options"

import assert from "assert";
import chai from "chai";
import Mocha from "mocha";
import { describe, it } from "node:test";

// const df = Response1xxInformative(10, { serverMessage: "", });

// df

// Response2xzSuccessfull(207, {}, Status207Opt([{ httpStatus: 200, serverMessage: "hola" }, { httpStatus: 300, serverMessage: "hola2", detail: "hola3" }]))
// let res = Response2xzSuccessfull(201)

// Response3xxRedirection(301, {})

// console.log(res)


describe("Test", () => {
  it('should ', () => {
    assert.equal(1 + 1, 2);
  });
})