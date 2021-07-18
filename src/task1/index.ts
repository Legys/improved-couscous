export type Sequence = Value[]
export type Value = "0" | "1"
export type SequenceEntry = {
  index: number,
  length: number
  value: Value
}

// input is not validated, meant to be used inside findLongest or as a private method of a class, etc
export const lookUpNext = (arr: Sequence, value: Value, currentIndex: number, counter: number = 1): SequenceEntry => {

  const nextIndex = currentIndex + 1

  if (arr[nextIndex] && arr[nextIndex] === value) {
    return {...lookUpNext(arr, value, nextIndex, counter + 1), index: currentIndex }
  }
  
  return {
    index: currentIndex,
    length: counter,
    value
  }
}

// I should return Sequence, not SequenceEntry, but anyways, lack of a time. It does the same
export const findLongestSequence = (arr: Sequence, value: Value): SequenceEntry | undefined => {
  if (arr.length === 0 || !arr.includes(value) ) return

  return arr.reduce((prev, current, index) => {

    if (current === value) {
      const sequence = lookUpNext(arr, value, index)

      if (sequence.length > prev.length) {
        return sequence
      }
    }
    return prev

  }, {
    index: 0,
    length: 0,
    value
  })
}
