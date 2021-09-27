import { Shape, Stroke, Color } from "../palette/paletteTypes.js"
import { STROKE_ENUM } from "../palette/shared.js"
import { autobind } from "../shared/decorators.js"
import { DragTarget } from "../shared/dragDrop.js"
import { createHtmlElement } from "../shared/utils.js"
import { ShapeItemsObj } from "../palette/items/Shape.js"
import { defaultConfig } from "../palette/items/default.js"

type RESPONSE_TYPE = {
  shape: Shape,
  stroke: Stroke,
  color: Color,
  bgColor: Color
} 
class Canvas implements DragTarget {
  hostElement: HTMLDivElement
  element: HTMLDivElement
  shape: Shape
  stroke: Stroke
  color: Color
  bgColor: Color
  key?: string

  constructor (
    hostElement: HTMLDivElement,
    config: RESPONSE_TYPE,
    key?: string
  ) {
    this.hostElement = hostElement
    this.key = key
    this.shape = config.shape
    this.stroke = config.stroke
    this.color = config.color
    this.bgColor = config.bgColor

    this.element = this.renderCanvas()
    this.configure()
  }

  private configure () {
    this.element.removeEventListener('dragover', this.dragOverHandler);
    this.element.removeEventListener('dragleave', this.dragLeaveHandler);
    this.element.removeEventListener('drop', this.dropHandler);
    // 
    this.element.addEventListener('dragover', this.dragOverHandler);
    this.element.addEventListener('dragleave', this.dragLeaveHandler);
    this.element.addEventListener('drop', this.dropHandler);
  }

  // private createHtmlElement(type: string = 'div', id: string, classList: string[], content?: string): HTMLElement {
  //   const element = document.createElement(type)
  //   element.id = id
  //   classList.forEach(c => element.classList.add(c))
  //   element.innerHTML = content || ''
  //   return element
  // }

  private setStroke (element: HTMLElement): void {
    const strokeClasses: string[] = []
    const type: STROKE_ENUM = this.stroke.type
    switch(type) {
      case STROKE_ENUM.Thin: {
        strokeClasses.push('border-2')
        break;
      }
      case STROKE_ENUM.Medium: {
        strokeClasses.push('border-4')
        break;
      }
      case STROKE_ENUM.Dark: {
        strokeClasses.push('border-8')
        break;
      }
      case STROKE_ENUM.Custom: {
        strokeClasses.push(this.stroke.className || '')
        break;
      }
    }
    const color: string = this.color.name ? `border-${this.color.name}` : 'white'
    strokeClasses.push(color)
    element.classList.add(...strokeClasses)
  }

  private setBackground (element: HTMLElement): void {
    const bgColor = (this.bgColor && !!this.bgColor.name) ? `bg-${this.bgColor.name}` : 'bg-transparent'
    element.classList.add(bgColor)
  }

  private renderCanvas (): HTMLDivElement {
    this.hostElement.innerHTML = ''
    const diagram = createHtmlElement('div', 'diagram', ['diagram']) as HTMLDivElement
    const [width, height] = this.shape.size
    const element = createHtmlElement('div', 'clock-in-canvas', [`shape-${this.shape.key}` ,`width-${width}`, `height-${height}`])
    diagram.append(element)
    this.hostElement.append(diagram)
    // stroke styles
    this.setStroke(element)
    // stroke styles:end
    // color 
    this.setBackground(element)
    // color : end
    return diagram
  }

  @autobind
  dragOverHandler (event: DragEvent) {
    if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      event.preventDefault();
      this.element.classList.add('droppable');
    }
  }

  @autobind
  dropHandler(event: DragEvent) {
    const jsonStr = event.dataTransfer!.getData('text/plain')
    const obj: RESPONSE_TYPE = JSON.parse(jsonStr)
    if (obj.hasOwnProperty('shape')) {
      const {key} = obj.shape
      // todo: create a projectState class and save everything there
      this.shape = ShapeItemsObj[key] || {}
    } else if (obj.hasOwnProperty('stroke')) {
      this.stroke = obj.stroke
    } else if (obj.hasOwnProperty('color')) {
      this.color = obj.color
    } else if (obj.hasOwnProperty('bgColor')) {
      this.bgColor = obj.bgColor
    }
    this.renderCanvas()
    this.element = this.renderCanvas()
    this.configure()
    // projectState.moveProject(projectId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished)
  }

  @autobind
  dragLeaveHandler() {
    this.element.classList.remove('droppable');
    console.log('drag-leave-handler')
  }

}

export { Canvas, defaultConfig }