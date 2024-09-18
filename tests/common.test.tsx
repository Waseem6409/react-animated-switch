import * as React from "react"
import { render } from "@testing-library/react"
import "jest-canvas-mock"
import Switch from "../src/components/Switch/Switch"

describe("Common render", () => {
  it("renders without crashing", () => {
    render(<Switch checked={false} onChange={(value: boolean) => console.log(value)} />)
  })
})
