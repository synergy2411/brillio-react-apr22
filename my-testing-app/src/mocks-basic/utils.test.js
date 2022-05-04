import * as util from './utils';

test("should call the 'sum' function", () => {
    jest.spyOn(util, "sum").mockReturnValueOnce(11);
    const result = util.sum(2,3);
    expect(result).toEqual(11);
})

test("Should call 'getDailyFortune' function", () => {
    jest.spyOn(util, "getDailyFortune").mockReturnValueOnce("happy birthday")
    const response = util.getDailyFortune();
    expect(response).toMatch("happy birthday")
})