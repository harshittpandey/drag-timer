import {Palette} from "./palette/palette.js"
import {Canvas, defaultConfig} from "./canvas/canvas.js"
import { PALETTE_TYPE } from "./palette/shared.js"
import {Shape} from "./palette/types/Shape.js"
import {Stroke} from "./palette/types/Stroke.js"
import {Color} from "./palette/types/Color.js"
import { ShapesItemsList } from "./palette/items/Shape.js"
import { StrokesItemsList } from "./palette/items/Stroke.js"
import { ColorsItemsList, TransparentColor } from "./palette/items/Color.js"

import { ProjectState } from "./state/ProjectState.js"

import { Timer } from "./timer/timer.js"

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
    stroke color palette
  */
  const colors: Color[] = ColorsItemsList
  const colorPalette = new Palette(paletteContainer, "color-palette", "Stroke Colors", PALETTE_TYPE.Color)
  colorPalette.renderItems(colors.map(c => ({ ...c, paletteType: PALETTE_TYPE.Color }) ))
  /*
    background color palette
  */
  const backgroundColors: Color[] = [TransparentColor, ...ColorsItemsList]
  const bgColorPalette = new Palette(paletteContainer, "bgcolor-palette", "Background Colors", PALETTE_TYPE.BgColor)
  bgColorPalette.renderItems(backgroundColors.map(c => ({ ...c, paletteType: PALETTE_TYPE.BgColor }) ))
  /*
    canvas
  */
  const canvasDiv = document.querySelector('#canvas')! as HTMLDivElement; // hostElement
  const canvas = new Canvas(canvasDiv, defaultConfig)
  /*
    timer in canvas
  */
  const timer = new Timer()
  const startButton = document.querySelector('#startTimer')! as HTMLButtonElement
  const stopButton = document.querySelector('#stopTimer')! as HTMLButtonElement
  startButton.addEventListener('click', () => timer.startTimer())
  stopButton.addEventListener('click', () => timer.stopTimer())

  var store = new ProjectState(canvas, [ shapePalette, strokePalette, colorPalette ])

}

init()