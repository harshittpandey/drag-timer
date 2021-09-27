import {PALETTE_TYPE, createHtmlElement} from "../shared.js"
import { DEFINED_TYPES } from "../paletteTypes.js"
import { Shape, ShapeBuilder } from "./Shape.js"
import { Stroke, StrokeBuilder } from "./Stroke.js"
import { Color, ColorBuilder } from "./Color.js"

class PaletteBuilder<T extends PALETTE_TYPE, U extends DEFINED_TYPES> {
  paletteType: T
  paletteInstance?: ShapeBuilder | StrokeBuilder | ColorBuilder

  constructor (paletteType: T, builderObject: U) {
    this.paletteType = paletteType
    if (paletteType === PALETTE_TYPE.Shape) {
      const shape = builderObject as Shape
      const createdShape = new ShapeBuilder(
        shape.key,
        shape.name,
        shape.shape,
        shape.size,
        {}
      )
      this.paletteInstance = createdShape
    }
    else if (paletteType === PALETTE_TYPE.Stroke) {
      const stroke = builderObject as Stroke
      const createdStroke = new StrokeBuilder(
        stroke.type,
        stroke.color
      )
      this.paletteInstance = createdStroke
    } else if (paletteType === PALETTE_TYPE.Color) {
      const color = builderObject as Color
      const createdColor = new ColorBuilder(color.name, PALETTE_TYPE.Color)
      this.paletteInstance = createdColor
    } else if (paletteType === PALETTE_TYPE.BgColor) {
      const bgColor = builderObject as Color
      const createdBgColor = new ColorBuilder(bgColor.name, PALETTE_TYPE.BgColor)
      this.paletteInstance = createdBgColor
    }
  }

  htmlBuilder (): HTMLElement {
    if (this.paletteInstance) {
      if (this.paletteType === PALETTE_TYPE.Color || this.paletteType === PALETTE_TYPE.BgColor) {
        const el = createHtmlElement('div', '', [])
        el.append(this.paletteInstance.htmlBuilder())
        return el
      }
      return this.paletteInstance.htmlBuilder()
    } else {
      return createHtmlElement('div', '', [])
    }
  }
}

export { PaletteBuilder }