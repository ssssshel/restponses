// import { Response1xxInformative } from "../.."
import { GenericInformativeResponse } from "../interfaces/bases"

import type * as MainMethods from "../../index"
import type * as StatusOptions from "../../status_options"
const { Response1xxInformative, Response2xzSuccessfull, Response3xxRedirection, Response4xxClientError, Response5xxServerError } = jest.requireActual<typeof MainMethods>("../../index")
const { Status300Opt } = jest.requireActual<typeof StatusOptions>("../../status_options")


describe("Pruebas de metodos 100", () => {
  it("100", () => {
    const response = Response1xxInformative(100, {})
    // console.log({ response })
    expect(response.httpStatus).toEqual(100)
  })
})

describe("Pruebas de metodos 300", () => {
  it("300", () => {
    const response = Response3xxRedirection(300, {}, Status300Opt([{ location: "test" }]))
    console.log({ response })
    expect(response.httpStatus).toEqual(300)
  })
})

describe("Pruebas de metodos 400", () => {
  it("400", () => {
    const response = Response4xxClientError(400, { errors: [{ message: "test", field: "test" }] })
    // console.log({ response })
    expect(response.httpStatus).toEqual(400)
  })
})