import { nextNonce } from "./dist";
import { expect, test } from "bun:test";


test("number is bigInt", () => {
    let newNonce = nextNonce()
    expect(typeof newNonce).toBe('bigint')
})

test("it's greater than before", () => {
    let firstBigInt = nextNonce()
    let secontBigInt = nextNonce()

    expect(firstBigInt < secontBigInt).toBe(true)

})
