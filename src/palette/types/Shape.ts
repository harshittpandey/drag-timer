import { PALETTE_TYPE, SHAPE_ENUM, Draggable, createHtmlElement } from "../shared.js"
import {autobind} from "../../shared/decorators.js"

interface Shape {
  paletteType?: PALETTE_TYPE.Shape,
  key: string
  name: string,
  shape: SHAPE_ENUM,
  size: number[]
}

class ShapeBuilder implements Shape, Draggable {
  key: string
  name: string
  shape: SHAPE_ENUM
  size: number[]
  renderOptions: object
  element: HTMLElement

  constructor (
    key: string,
    name: string,
    shape: SHAPE_ENUM,
    size: number[],
    renderOptions: object
  ) {
    this.key = key
    this.name = name
    this.shape = shape
    this.size = size
    this.renderOptions = renderOptions

    this.element = this.renderShape()
    this.configure()
  }

  configure() {
    this.element.removeEventListener('dragstart', this.dragStartHandler)
    this.element.removeEventListener('dragend', this.dragEndHandler)
    // 
    this.element.addEventListener('dragstart', this.dragStartHandler)
    this.element.addEventListener('dragend', this.dragEndHandler)
  }

  htmlBuilder (): HTMLElement {
    const el = createHtmlElement('div', this.key, [this.key])
    const name = createHtmlElement('div', '', ['shape-name'], this.name)
    el.append(this.element, name)
    el.setAttribute('draggable', 'true');
    return el
  }

  renderShape (): HTMLElement {
    const [width, height] = this.size
    const shapeContainer = createHtmlElement('div', `shape-${this.key}-container`, ['shape'])
    const el = createHtmlElement('div', `shape-${this.key}`, [`width-${width}`, `height-${height}`, 'selector'])
    shapeContainer.append(el)
    el.setAttribute('draggable', 'true')
    return shapeContainer
  }

  // drag methods
  @autobind
  dragStartHandler(event: DragEvent) {
    console.log('dragStart')
    event.dataTransfer!.setData('text/plain',
      JSON.stringify({
        shape: {key: this.key}
      })
    );
    event.dataTransfer!.effectAllowed = 'move';
  }

  @autobind
  dragEndHandler (_: DragEvent) {
    // console.log('dragend')
  }
}

export { Shape, ShapeBuilder }