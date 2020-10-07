import {objectToMatrix, arrayToMatrixArray, extractAllFieldNames} from "../../src/components/jsonVisualizerUtil";

describe("json visualizer utils", function() {
  it("transform an object into a matrix (2d array)", function() {
    const obj = {a:1, b:2}
    const expected = [['a', 1], ['b', 2]]
    expect(objectToMatrix(obj)).toEqual(expected);
  })

  describe("transform an array", function() {
    it("of primitives to a 2 column matrix (2d array)[]", function () {
      const arr = ['a', 'b', 'c']
      const expected = [[[0, 'a'], [1, 'b'], [2, 'c']]]
      expect(arrayToMatrixArray(arr)).toEqual(expected);
    })

    it("of objects to a multi-column matrix (2d array)[]", function () {
      const arr = [{a:1, b:2, c:"str1"}, {a:4, b:5, c:"str2"}, {a:6, b:7, c:"str3"}]
      const expected = [[['index', 'a', 'b', 'c'], [0, 1, 2, "str1"], [1, 4, 5, "str2"], [2, 6, 7, "str3"]]]
      expect(arrayToMatrixArray(arr)).toEqual(expected);
    })

    it("of mixed primitives and objects into two different matrixes for each type", function () {
      const arr = ['a', 'b', 'c', {a:1, b:2, c:"str1"}, {a:4, b:5, c:"str2"}, {a:6, b:7, c:"str3"}]
      const expected = [[[0, 'a'], [1, 'b'], [2, 'c']],
        [['index', 'a', 'b', 'c'], [3, 1, 2, "str1"], [4, 4, 5, "str2"], [5, 6, 7, "str3"]]]
      expect(arrayToMatrixArray(arr)).toEqual(expected);
    })
  })

  describe("extractAllFieldNames", function() {
    it("extract field names from array of objects", function() {
      const arr = [{a:1, b:2, c:"str1"}, {a:4, b:5, c:"str2"}, {a:6, b:7, c:"str3"}]
      const expected = ['a', 'b', 'c']
      expect(extractAllFieldNames(arr)).toEqual(expected)
    })

    it("extract field names from array of objects with different fields", function() {
      const arr = [{a:1, b:2, c:"str1"}, {a:4, b:5, d:"str2"}, {e:6, f:7, g:"str3"}]
      const expected = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
      expect(extractAllFieldNames(arr)).toEqual(expected)
    })
  })
})

