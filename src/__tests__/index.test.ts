// import { Response1xxInformative } from "../.."
import { GenericInformativeResponse } from "../interfaces/bases"

import type * as MainMethods from "../../index"
import type * as Options from "../../utils/status_options"
const { Response1xxInformative, Response2xzSuccessfull, Response3xxRedirection, Response4xxClientError, Response5xxServerError } = jest.requireActual<typeof MainMethods>("../../index")
const { StateOptions } = jest.requireActual<typeof Options>("../../utils/status_options")


describe("Pruebas de metodos 100", () => {
  it("100", () => {
    const response = Response1xxInformative(100, {})
    // console.log({ response })
    expect(response.httpStatus).toEqual(100)
  })
})

describe("Pruebas de metodos 200", () => {
  it("200", () => {
    const response = Response2xzSuccessfull(204, {},)
    console.log({ response })
    expect(response.httpStatus).toEqual(201)
  })
})

describe("Pruebas de metodos 300", () => {
  it("300", () => {
    const response = Response3xxRedirection(301, {}, StateOptions.Status301Opt({ newSource: "https://www.google.com", oldSource: "https://www.google.com" }))
    console.log({ response })
    expect(response.httpStatus).toEqual(301)
  })
})

describe("Pruebas de metodos 400", () => {
  it("400", () => {
    const response = Response4xxClientError(400, {})
    // console.log({ response })
    expect(response.httpStatus).toEqual(400)
  })
})