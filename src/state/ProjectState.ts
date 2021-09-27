import {Canvas} from "../canvas/canvas.js"
import {Palette} from "../palette/palette.js"
import { PALETTE_TYPE } from "../palette/shared.js"

class ProjectState {
  canvas: Canvas
  palettes: Palette[]
  constructor (canvas: Canvas, palettes: Palette[]) {
    this.canvas = canvas
    this.palettes = palettes
  }
  private getPaletteIndex(paletteType: PALETTE_TYPE): number {
    switch (paletteType) {
      case PALETTE_TYPE.Shape: return 0
      case PALETTE_TYPE.Stroke: return 1
      case PALETTE_TYPE.Color: return 2
      default: return -1
    }
  }
  public getCanvas (): Canvas {
    return this.canvas
  }
  public getPalette (paletteType: PALETTE_TYPE): Palette {
    const index: number = this.getPaletteIndex(paletteType)
    return this.palettes[index]
  }
  public exportAllMethods () {
    return {
      getCanvas: this.getCanvas,
      getPalette: this.getPalette
    }
  }
}

export { ProjectState }