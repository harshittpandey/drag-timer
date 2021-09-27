import { PALETTE_TYPE, STROKE_ENUM, Draggable, createHtmlElement } from "../shared.js"
import {autobind} from "../../shared/decorators.js"

interface Stroke {
  paletteType?: PALETTE_TYPE.Stroke,
  type: STROKE_ENUM,
  className?: string,
  color?: string
}

class StrokeBuilder implements Stroke, Draggable {
  paletteType: PALETTE_TYPE.Stroke = PALETTE_TYPE.Stroke
  type: STROKE_ENUM
  className?: string
  color: string
  element: HTMLElement

  constructor (type: STROKE_ENUM, className: string = '', color: string = 'stroke-color') {
    this.type = type
    this.className = className
    this.color = color
    
    this.element = this.renderStrokes()
    this.configure()
  }

  configure() {
    this.element.removeEventListener('dragstart', this.dragStartHandler)
    this.element.removeEventListener('dragend', this.dragEndHandler)
    // 
    this.element.addEventListener('dragstart', this.dragStartHandler)
    this.element.addEventListener('dragend', this.dragEndHandler)
  }

  getClassNameForEnum (_enum: STROKE_ENUM, cutsomClass?: string): string {
    switch(_enum) {
      case STROKE_ENUM.Thin: return "border-2"
      case STROKE_ENUM.Medium: return "border-4"
      case STROKE_ENUM.Dark: return "border-8"
      case STROKE_ENUM.Custom: return cutsomClass || ''
    }
  }

  // private createHtmlElement(type: string = 'div', id: string, classList: string[], content?: string): HTMLElement {
  //   const element = document.createElement(type)
  //   element.id = id
  //   classList.forEach(c => element.classList.add(c))
  //   element.innerHTML = content || ''
  //   return element
  // }

  private renderStrokes (): HTMLElement {
    let strokeWidth: string = this.getClassNameForEnum(this.type, this.className)
    const color:string = this.color || 'white'
    const strokeContainer = createHtmlElement('div', `stroke-${this.type}-container`, ['stroke', strokeWidth, color, 'selector'])
    const el = createHtmlElement('div', `stroke-${this.type}`, [])
    strokeContainer.append(el)
    strokeContainer.setAttribute('draggable', 'true')
    return strokeContainer
  }
  
  colorSlider (): HTMLElement {
    let slider = createHtmlElement('div', 'color-slider-custom', [''])
    return slider
  }

  htmlBuilder (): HTMLElement {
    const el = this.element
    el.setAttribute('draggable', 'true');
    return el
  }
  // drag methods
  @autobind
  dragStartHandler(event: DragEvent) {
    console.log('dragStart from stroke')
    event.dataTransfer!.setData('text/plain', 
      JSON.stringify({
        stroke: {
          type: this.type,
          className: this.className
        }
      })
    );
    event.dataTransfer!.effectAllowed = 'move';
  }

  @autobind
  dragEndHandler (_: DragEvent) {
    // console.log('dragend')
  }
}

export { Stroke, StrokeBuilder }