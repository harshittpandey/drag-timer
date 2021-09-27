import { createHtmlElement } from "../shared/utils.js";
var SHAPE_ENUM;
(function (SHAPE_ENUM) {
    SHAPE_ENUM[SHAPE_ENUM["Rectangle"] = 0] = "Rectangle";
    SHAPE_ENUM[SHAPE_ENUM["Circle"] = 1] = "Circle";
    SHAPE_ENUM[SHAPE_ENUM["RoundedRectangle"] = 2] = "RoundedRectangle";
    SHAPE_ENUM[SHAPE_ENUM["Square"] = 3] = "Square";
})(SHAPE_ENUM || (SHAPE_ENUM = {}));
var STROKE_ENUM;
(function (STROKE_ENUM) {
    STROKE_ENUM[STROKE_ENUM["Thin"] = 0] = "Thin";
    STROKE_ENUM[STROKE_ENUM["Medium"] = 1] = "Medium";
    STROKE_ENUM[STROKE_ENUM["Dark"] = 2] = "Dark";
    STROKE_ENUM[STROKE_ENUM["Custom"] = 3] = "Custom";
})(STROKE_ENUM || (STROKE_ENUM = {}));
var PALETTE_TYPE;
(function (PALETTE_TYPE) {
    PALETTE_TYPE[PALETTE_TYPE["Shape"] = 0] = "Shape";
    PALETTE_TYPE[PALETTE_TYPE["Stroke"] = 1] = "Stroke";
    PALETTE_TYPE[PALETTE_TYPE["Color"] = 2] = "Color";
})(PALETTE_TYPE || (PALETTE_TYPE = {}));
// type PaletteType = { Shape: PALETTE_TYPE.Shape }
// draggable
// Drag and Drop interfaces
// interface Draggable {
//   dragStartHandler(event: DragEvent): void;
//   dragEndHandler(event: DragEvent): void;
// }
// interface DragTarget {
//   dragOverHandler(event: DragEvent): void;
//   dropHandler(event: DragEvent): void;
//   dragLeaveHandler(event: DragEvent): void;
// }
// // constant methods
// function createHtmlElement (type: string, id: string, classList: string[], content?: string): HTMLElement {
//   const element = document.createElement(type)
//   element.id = id
//   classList.forEach(c => element.classList.add(c))
//   element.innerHTML = content || ''
//   return element
// }
export { SHAPE_ENUM, STROKE_ENUM, PALETTE_TYPE, createHtmlElement };
