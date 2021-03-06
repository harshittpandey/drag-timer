import { ShapesItemsList } from "./Shape.js"
import { StrokesItemsList } from "./Stroke.js"
import { ColorsItemsList, TransparentColor } from "./Color.js"

const defaultConfig = {
  shape: ShapesItemsList[0],
  stroke: StrokesItemsList[0],
  color: ColorsItemsList[0],
  bgColor: TransparentColor
}

export { defaultConfig }