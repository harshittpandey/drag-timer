import {Color} from "../types/Color.js"

const colors = [
  'gray-200', 'gray-400', 'gray-600',
  'red-200', 'red-400', 'red-600',
  'yellow-200', 'yellow-400', 'yellow-600',
  'green-200', 'green-400', 'green-600',
  'blue-200', 'blue-400', 'blue-600',
  'indigo-200', 'indigo-400', 'indigo-600',
  'pink-200', 'pink-400', 'pink-600',
]

const ColorsItemsList: Color[] = [
  ...colors.map(c => ({ name: c }))
]

const ColorsItemsObj = colors.reduce((obj, c) => {
  Object.assign(obj, { c: { name: c } })
  return obj
}, {})

export { ColorsItemsList, ColorsItemsObj }