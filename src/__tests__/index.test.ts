// import { Response1xxInformative } from "../.."
import { GenericInformativeResponse } from "../interfaces/bases"

import type * as MainMethods from "../../index"
import type * as Options from "../../utils/status_options"
const { Response1xxInformative, Response2xxSuccessful, Response3xxRedirection, Response4xxClientError, Response5xxServerError } = jest.requireActual<typeof MainMethods>("../../index")
const { StateOptions } = jest.requireActual<typeof Options>("../../utils/status_options")


describe("Pruebas de metodos 100", () => {
  it("100", () => {
    const response = Response1xxInformative(100, { consultedResource: "/getPotato", serverMessage: "Potato was found", detail: "eat potato" })
    console.log({ response })
    expect(response.httpStatus).toEqual(100)
  })
})

describe("Pruebas de metodos 200", () => {
  it("200", () => {
    const response = Response2xxSuccessful(200, { consultedResource: "/getPotato", serverMessage: "Potato was found", detail: "you can eat potato now" })
    console.log({ response })
    expect(response.httpStatus).toEqual(200)
  })
})

describe("Pruebas de metodos 300", () => {
  it("300", () => {
    const response = Response3xxRedirection(300, { consultedResource: "/getPotato", detail: "Potato was found, but you can't eat it now", serverMessage: "Potato was found, now choose one" })
    console.log({ response })
    expect(response.httpStatus).toEqual(301)
  })
})

describe("Pruebas de metodos 400", () => {
  it("400", () => {
    const response = Response4xxClientError(404, { consultedResource: "/getPotato", detail: "Potato was not found", serverMessage: "Potato was not found", errorCode: "404NOTFOUND", errorName: "PotatoNotFound" })
    console.log({ response })
    expect(response.httpStatus).toEqual(400)
  })
})

describe("Pruebas de metodos 500", () => {
  it("500", () => {
    const response = Response5xxServerError(500, { consultedResource: "/getPotato", serverMessage: "Potato was not found due to a server error", errorCode: "500SERVERERROR", errorName: "INTERNAL_SERVER_ERROR" })
    console.log({ response })
    expect(response.httpStatus).toEqual(500)
  })
})