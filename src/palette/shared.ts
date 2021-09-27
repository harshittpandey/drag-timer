import { Draggable, DragTarget } from "../shared/dragDrop.js"
import { createHtmlElement } from "../shared/utils.js"

enum SHAPE_ENUM { Rectangle, Circle, RoundedRectangle, Square }
enum STROKE_ENUM { Thin, Medium, Dark, Custom}
enum PALETTE_TYPE { Shape, Stroke, Color, BgColor }

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

export { SHAPE_ENUM, STROKE_ENUM, PALETTE_TYPE, Draggable, DragTarget, createHtmlElement }