import {Palette} from "./palette/Palette.js"
import {Canvas, defaultConfig} from "./canvas/canvas.js"
import { PALETTE_TYPE } from "./palette/shared.js"
import {Shape} from "./palette/types/Shape.js"
import {Stroke} from "./palette/types/Stroke.js"
import {Color} from "./palette/types/Color.js"
import { ShapesItemsList } from "./palette/items/Shape.js"
import { StrokesItemsList } from "./palette/items/Stroke.js"
import { ColorsItemsList } from "./palette/items/Color.js"

import { ProjectState } from "./state/ProjectState.js"

function init() {
  /*
    shapes palette
  */
  const paletteContainer = document.querySelector('#palettes')! as HTMLDivElement; // hostElement
  const shapes: Shape[] = ShapesItemsList
  const shapePalette = new Palette(paletteContainer, "shape-palette", "Shapes", PALETTE_TYPE.Shape)
  shapePalette.renderItems(shapes.map(s => ({ ...s, paletteType: PALETTE_TYPE.Shape })))
  /*
    strokes palette
  */
  const strokes: Stroke[] = StrokesItemsList
  const strokePalette = new Palette(paletteContainer, "stroke-palette", "Strokes", PALETTE_TYPE.Stroke)
  strokePalette.renderItems(strokes.map(s => ({ ...s, paletteType: PALETTE_TYPE.Stroke }) ))
  /*
    color palette
  */
  const colors: Color[] = ColorsItemsList
  const colorPalette = new Palette(paletteContainer, "color-palette", "Colors", PALETTE_TYPE.Color)
  colorPalette.renderItems(colors.map(c => ({ ...c, paletteType: PALETTE_TYPE.Color }) ))
  /*
    canvas
  */
  const canvasDiv = document.querySelector('#canvas')! as HTMLDivElement; // hostElement
  const canvas = new Canvas(canvasDiv, defaultConfig)

  var store = new ProjectState(canvas, [ shapePalette, strokePalette, colorPalette ])
}

init()