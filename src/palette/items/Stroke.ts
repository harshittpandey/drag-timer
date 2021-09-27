import {Stroke} from "../types/Stroke.js"
import {STROKE_ENUM} from "../shared.js"

const DEFAULT_STROKE_COLOR = 'white'
const Thin: Stroke = {
  type: STROKE_ENUM.Thin,
  color: DEFAULT_STROKE_COLOR
}
const Medium: Stroke = {
  type: STROKE_ENUM.Medium,
  color: DEFAULT_STROKE_COLOR
}
const Dark: Stroke = {
  type: STROKE_ENUM.Dark,
  color: DEFAULT_STROKE_COLOR
}

const StrokesItemsList = [
  Thin,
  Medium,
  Dark
]

const ShapeItemsObj = {
  [Thin.type]: Thin,
  [Medium.type]: Medium,
  [Dark.type]: Dark
}

export { StrokesItemsList, ShapeItemsObj }