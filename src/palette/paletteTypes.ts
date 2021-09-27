import {Shape} from './types/Shape';
import {Stroke} from './types/Stroke';
import {Color} from './types/Color';
import { PALETTE_TYPE } from "./shared"

type DEFINED_TYPES = Shape | Stroke | Color

type BUILDER_OBJECTS_TYPE = {
  [PALETTE_TYPE.Shape]: Shape,
  [PALETTE_TYPE.Stroke]: Stroke,
  [PALETTE_TYPE.Color]: Color,
  [PALETTE_TYPE.BgColor]: Color
  // Shape: Shape,
  // Stroke: Stroke,
  // Color: Color
}

export { DEFINED_TYPES, Shape, Stroke, Color, BUILDER_OBJECTS_TYPE }