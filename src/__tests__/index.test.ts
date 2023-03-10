// import { Response1xxInformative } from "../.."
import { GenericInformativeResponse } from "../interfaces/bases"

import type * as MainMethods from "../../index"
const { Response1xxInformative, Response2xxSuccessful, Response3xxRedirection, Response4xxClientError, Response5xxServerError, StatusOptions } = jest.requireActual<typeof MainMethods>("../../index")


describe("Pruebas de metodos 100", () => {
  it("100", () => {
    const response = Response1xxInformative("100Continue", { consultedResource: "/getPotato", serverMessage: "Potato was found", detail: "eat potato" })
    console.log({ response })
    expect(response.httpStatus).toEqual(100)
  })
})

describe("Pruebas de metodos 200", () => {
  it("200", () => {
    const response = Response2xxSuccessful("200OK", { consultedResource: "/getPotato", data: [{ ddd: "dd" }] })
    console.log({ response })
    expect(response.httpStatus).toEqual(200)
  })
})

describe("Pruebas de metodos 300", () => {
  it("300", () => {
    const response = Response3xxRedirection("301MovedPermanently", { consultedResource: "/getPotato", detail: "You can found the resource consulting at: '/getPot' endpoint" })
    console.log({ response })
    expect(response.httpStatus).toEqual(301)
  })
})

describe("Pruebas de metodos 400", () => {
  it("400", () => {
    const response = Response4xxClientError("404NotFound", { consultedResource: "/getPotato", detail: "Potato was not found", errorCode: "NOT_FOUND_404" }, StatusOptions.Status404Opt("Potato n4355"))
    console.log({ response })
    expect(response.httpStatus).toEqual(400)
  })
})

describe("Pruebas de metodos 500", () => {
  it("500", () => {
    const response = Response5xxServerError("500InternalServerError", { consultedResource: "/getPotato", errorCode: "500SERVERERROR", errorName: "INTERNAL_SERVER_ERROR" })
    console.log({ response })
    expect(response.httpStatus).toEqual(500)
  })
})