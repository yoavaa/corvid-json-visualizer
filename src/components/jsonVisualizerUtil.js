import _ from "lodash";


export function objectToMatrix(obj) {
  return Object.entries(obj)
}


export function arrayToMatrixArray(arr) {
  if (arr.length === 0)
    return [];
  let matrices = [];
  let lastIsObj = _.isObject(arr[0])

  const transformSlice = (slice, indexOffset) => lastIsObj?objectArrToMatrix(slice, indexOffset):primitiveArrToMatrix(slice, indexOffset)

  let slice = [];
  let lastIndex = 0
  for (let i=0; i < arr.length; i++) {
    if (_.isObject(arr[i]) === lastIsObj)
      slice.push(arr[i]);
    else {
      matrices.push(transformSlice(slice, lastIndex))
      lastIndex = i;
      slice = [arr[i]];
      lastIsObj = _.isObject(arr[i])
    }
  }
  matrices.push(transformSlice(slice, lastIndex))
  return matrices;
}

function primitiveArrToMatrix(arr, indexOffset) {
  return arr.map((val, index) => [index+indexOffset, val]);
}

function objectArrToMatrix(arr, indexOffset) {
  let fieldNames = extractAllFieldNames(arr);
  let matrix = [['index'].concat(fieldNames)];
  return matrix.concat(
    arr.map((obj, index) =>
      [index+indexOffset].concat(
        fieldNames.map(field =>
          field in obj?obj[field]:''))))
}

export function extractAllFieldNames(arr) {
  let fieldNamesMap = arr.reduce((fieldNamesMap, object) => {
    let objectFields = Object.keys(object);
    objectFields.forEach(field => {
      if (!fieldNamesMap[field]) {
        fieldNamesMap[field] = true;
      }
    })
    return fieldNamesMap
  }, {})
  let fieldNames = Object.keys(fieldNamesMap)
  return fieldNames
}