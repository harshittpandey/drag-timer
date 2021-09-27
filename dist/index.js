import { Palette } from "./palette/Palette.js";
import { Canvas, defaultConfig } from "./canvas/canvas.js";
import { PALETTE_TYPE } from "./palette/shared.js";
import { ShapesItemsList } from "./palette/items/Shape.js";
import { StrokesItemsList } from "./palette/items/Stroke.js";
import { ColorsItemsList } from "./palette/items/Color.js";
import { ProjectState } from "./state/ProjectState.js";
function init() {
    /*
      shapes palette
    */
    const paletteContainer = document.querySelector('#palettes'); // hostElement
    const shapes = ShapesItemsList;
    const shapePalette = new Palette(paletteContainer, "shape-palette", "Shapes", PALETTE_TYPE.Shape);
    shapePalette.renderItems(shapes.map(s => (Object.assign(Object.assign({}, s), { paletteType: PALETTE_TYPE.Shape }))));
    /*
      strokes palette
    */
    const strokes = StrokesItemsList;
    const strokePalette = new Palette(paletteContainer, "stroke-palette", "Strokes", PALETTE_TYPE.Stroke);
    strokePalette.renderItems(strokes.map(s => (Object.assign(Object.assign({}, s), { paletteType: PALETTE_TYPE.Stroke }))));
    /*
      color palette
    */
    const colors = ColorsItemsList;
    const colorPalette = new Palette(paletteContainer, "color-palette", "Colors", PALETTE_TYPE.Color);
    colorPalette.renderItems(colors.map(c => (Object.assign(Object.assign({}, c), { paletteType: PALETTE_TYPE.Color }))));
    /*
      canvas
    */
    const canvasDiv = document.querySelector('#canvas'); // hostElement
    const canvas = new Canvas(canvasDiv, defaultConfig);
    var store = new ProjectState(canvas, [shapePalette, strokePalette, colorPalette]);
}
init();
