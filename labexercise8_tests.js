import { test } from "node:test"
import assert from "node:assert"
import {getResult, getRandomInt} from "./labexercise8.js"

test("getRandomInt will return a number", (t) => {
    let result = typeof getRandomInt(1,500)
    let expected = "number"
    assert.strictEqual(result, expected)
})

test("getRandomInt will return a number in the range provided", (t) => {
    let min = 1
    let max = 7
    for (let i = 0; i < 30; i++) {
        let result = getRandomInt(min,max)
        assert.ok((result >= min))
        assert.ok((result < max))
    }
})