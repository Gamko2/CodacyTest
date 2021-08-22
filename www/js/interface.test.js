const rewire = require("rewire")
const interface = rewire("./interface")
const allVisible = interface.__get__("allVisible")
const decimal = interface.__get__("decimal")
const hexadecimal = interface.__get__("hexadecimal")
const binary = interface.__get__("binary")
// @ponicode
describe("allVisible", () => {
    test("0", () => {
        let callFunction = () => {
            allVisible()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("decimal", () => {
    test("0", () => {
        let callFunction = () => {
            decimal()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("hexadecimal", () => {
    test("0", () => {
        let callFunction = () => {
            hexadecimal()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("binary", () => {
    test("0", () => {
        let callFunction = () => {
            binary()
        }
    
        expect(callFunction).not.toThrow()
    })
})
