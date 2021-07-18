import { findLongestSequence, lookUpNext, Value } from "."

const arr1: Value[] = [
  '0', '1', '0', '1', '0', '1', '1', '1', '0', '1', '1', '0', '0', '1', '0', '1', '0', '1', '1', '0',
  '1', '1', '0', '0', '0', '1', '1', '0', '0', '0', '1', '1', '0', '1', '1', '0', '1', '1', '1', '1',
  '0', '1', '1', '0', '1', '1', '0', '1', '0', '1', '1', '0', '0', '1', '0', '1', '0', '0', '1', '0',
  '0', '0', '0', '0', '0', '1', '1', '1', '0', '1', '0', '0', '0', '1', '1', '0', '1', '1', '1', '1',
  '0', '0', '1', '0', '0', '0', '0', '0', '0', '1', '1', '1', '0', '1', '0', '0', '0', '1', '1', '0',
  '1', '0', '0', '0', '0', '1', '1', '0', '0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '0', '0',
  '0', '1', '0', '0', '1', '1', '1', '1', '0', '1', '1', '1', '0', '0', '0', '0', '0', '1', '1', '1',
  '0', '1', '0', '0', '0', '1', '1', '0', '1', '0', '0', '1', '0', '1', '1', '0', '1', '1', '1', '1',
  '0', '0', '1', '0', '0', '0', '0', '1'
]

const arr2: Value[] = ["1", "0", "0", "1", "0", "0", "0"] 
const arr3: Value[] = ["1", "1", '1']
const arr4: Value[] = ["1", "1", '1', '0']
const arr5: Value[] = ["1", "1", '1', '0', '0']
const arr6: Value[] = ["0", "0", '1', '0']
const arr7: Value[] = ["0", "1", '1', '0']
const arr8: Value[] = ["0"]
const arr9: Value[] = []
const arr10: Value[] = ["1"]
const arr11: Value[] = ["1", "1", '1', '0', '0']

describe("Longest sequence", () => {
  it("should find the longest sequence", () => {
    expect(findLongestSequence(arr1, "0")).toStrictEqual({ index: 59, length: 6, value: "0" });
    expect(findLongestSequence(arr2, "0")).toStrictEqual({ index: 4, length: 3, value: "0" });
    expect(findLongestSequence(arr3, "0")).toStrictEqual(undefined);
    expect(findLongestSequence(arr4, "0")).toStrictEqual({ index: 3, length: 1, value: "0" });
    expect(findLongestSequence(arr5, "0")).toStrictEqual({ index: 3, length: 2, value: "0" });
    expect(findLongestSequence(arr6, "0")).toStrictEqual({ index: 0, length: 2, value: "0" });
    expect(findLongestSequence(arr7, "0")).toStrictEqual({ index: 0, length: 1, value: "0" });
    expect(findLongestSequence(arr8, "0")).toStrictEqual({ index: 0, length: 1, value: "0" });
    expect(findLongestSequence(arr9, "0")).toStrictEqual(undefined);
    expect(findLongestSequence(arr10, "0")).toStrictEqual(undefined);
    expect(findLongestSequence(arr11, "1")).toStrictEqual({ index: 0, length: 3, value: "1"});

  });
});

describe("LookUpNext", () => {
  // Not sure should I write tests for kind of private functions, but I already did, so I keep them
  it("should look up next value", () => {
    expect(lookUpNext(arr1, "0", 11)).toStrictEqual({ index: 11, length: 2, value: "0"});
    expect(lookUpNext(arr2, "0", 1)).toStrictEqual({ index: 1, length: 2, value: "0"});
    expect(lookUpNext(arr4, "0", 4)).toStrictEqual({ index: 4, length: 1, value: "0" });
    expect(lookUpNext(arr5, "0", 3)).toStrictEqual({ index: 3, length: 2, value: "0" });
    expect(lookUpNext(arr8, "0", 0)).toStrictEqual({ index: 0, length: 1, value: "0" });

  })
})

