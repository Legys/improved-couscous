import { findLongestSequence,  Sequence, Value } from "../task1";

type OptionalSequence = Array<Value | undefined>
type NestedSequence = Sequence[]

const toggleValue = (value: Value) => value === "0" ? "1" : "0"

const nestedSequenceSequences = (arr: Sequence, currentValue: Value, nestedSequence: Sequence[] ): Sequence[] => {
  const nextValueToUse = toggleValue(currentValue)
  const sequence = findLongestSequence(arr, currentValue)
  
  if (sequence) {
    const arrCopy = [...arr]
    const targetSequence = (arrCopy as OptionalSequence).splice(sequence.index, sequence.length, undefined)
    nestedSequence.push(targetSequence as Sequence)
    return nestedSequenceSequences(arrCopy, nextValueToUse, nestedSequence)
  }
  return nestedSequence
}

const takeSequence = (nestedSequence: NestedSequence, value: Value): Sequence | undefined => {
  const searchIndex = nestedSequence.findIndex(sequence => sequence.includes(value))

  if (searchIndex !== undefined) {
    return nestedSequence.splice(searchIndex, 1)[0]
  }
}

export const alternateSequence = (arr: Sequence, initialValue: Value): Sequence => {
  if (!arr.includes(initialValue)) { return arr }

  const nestedSequence = nestedSequenceSequences(arr, initialValue, []).reverse()
  const orderedSequence: Sequence = []

  let lastValue = initialValue

  while (nestedSequence.length > 0) {
    const sequence = takeSequence(nestedSequence, lastValue)
    if (sequence) {
      orderedSequence.push(...sequence)
    }
    lastValue = toggleValue(lastValue)
  }
  return orderedSequence
}
