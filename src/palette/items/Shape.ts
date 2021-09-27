import {Shape} from "../types/Shape.js"
import {SHAPE_ENUM} from "../shared.js"

const RectangleShape: Shape = {
  key: 'rectangle',
  name: 'Rectangle',
  shape: SHAPE_ENUM.Rectangle,
  size: [100, 60]
}
const CircleShape: Shape = {
  key: 'circle',
  name: 'Circle',
  shape: SHAPE_ENUM.Circle,
  size: [70, 70]
}
const RoundedRectangleShape: Shape = {
  key: 'roundedRectangle',
  name: 'Rounded Rectangle',
  shape: SHAPE_ENUM.RoundedRectangle,
  size: [100, 60]
}
const Square: Shape = {
  key: 'square',
  name: 'Square',
  shape: SHAPE_ENUM.Square,
  size: [70, 70]
}

const ShapesItemsList = [
  RectangleShape,
  CircleShape,
  RoundedRectangleShape,
  Square
]

const ShapeItemsObj = {
  [RectangleShape.key]: RectangleShape,
  [CircleShape.key]: CircleShape,
  [RoundedRectangleShape.key]: RoundedRectangleShape,
  [Square.key]: Square
}

export { ShapesItemsList, ShapeItemsObj }