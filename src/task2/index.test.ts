import { alternateSequence } from ".";
import { Value } from "../task1";

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
const arr11: Value[] = ["1", '1', '1']

describe("Alternate sequence", () => {
  it("should return a new sequence with ascending order by sequences length and alternating 1 sequence and 0 sequences", () => {
    expect(alternateSequence(arr1, "0")).toStrictEqual( ["0","1","0","1","0","1","0","1","0","1",
                                           "0","1","0","1","0","1","0","1","0","1",
                                           "0","1","0","1","0","1","0","1","0","1",
                                           "0","1","0","1","0","1","0","1","0","1",
                                           "0","1","0","1","1","0","1","1","0","1",
                                           "1","0","0","1","1","0","0","1","1","0",
                                           "0","1","1","0","0","1","1","0","0","1",
                                           "1","0","0","1","1","0","0","1","1","0",
                                           "0","1","1","0","0","1","1","0","0","0",
                                           "1","1","0","0","0","1","1","0","0","0",
                                           "1","1","1","0","0","0","1","1","1","0",
                                           "0","0","1","1","1","0","0","0","0","1",
                                           "1","1","0","0","0","0","1","1","1","0",
                                           "0","0","0","0","1","1","1","1","0","0",
                                           "0","0","0","0","1","1","1","1","0","0",
                                           "0","0","0","0","1","1","1","1","0","0",
                                           "0","0","0","0","1","1","1","1"]);

    expect(alternateSequence(arr2, "0")).toStrictEqual(['0', '0', '1', '0', '0', '0', '1']);
    expect(alternateSequence(arr3, "1")).toStrictEqual(['1', '1', '1']);
    expect(alternateSequence(arr4, "0")).toStrictEqual(['0', '1', '1', '1']);
    expect(alternateSequence(arr5, "0")).toStrictEqual(['0', '0', '1', '1', '1']);
    expect(alternateSequence(arr6, "0")).toStrictEqual(['0', '1', '0', '0']);
    expect(alternateSequence(arr7, "0")).toStrictEqual(['0', '1', '1', '0']);
    expect(alternateSequence(arr8, "0")).toStrictEqual(['0']);
    expect(alternateSequence(arr9, "0")).toStrictEqual([]);
    expect(alternateSequence(arr9, "1")).toStrictEqual([]);
    expect(alternateSequence(arr10, "0")).toStrictEqual(['1']);
    expect(alternateSequence(arr10, "1")).toStrictEqual(['1']);
    expect(alternateSequence(arr11, "0")).toStrictEqual(['1', '1', '1']);
    expect(alternateSequence(arr11, "1")).toStrictEqual(['1', '1', '1']);

  });
});


