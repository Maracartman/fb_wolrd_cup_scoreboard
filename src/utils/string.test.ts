import StringUtil from './string'

describe('String utils caps suite', () => {
    describe('number to string score format capability', () => {
        it('returns "01" if the score format method is called with the number 1', () => {
            expect(StringUtil.transformToStringScore(1)).toEqual("01")
        })

        it("doesn't pad zeroes to the number if the number itself is a two digits number", () => {
            expect(StringUtil.transformToStringScore(99)).toEqual("99")
        })

        it('returns the same number if it overflows the size (default to 2)', () => {
            expect(StringUtil.transformToStringScore(100)).toEqual("100")
        })

        it('returns "0100" if the size defined is 4', () => {
            expect(StringUtil.transformToStringScore(100,4)).toEqual("0100")
        })
    })
})