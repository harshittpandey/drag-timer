import { PALETTE_TYPE, Draggable, createHtmlElement } from "../shared.js"
import {autobind} from "../../shared/decorators.js"

type ALLOWED_COLORS_TYPES = PALETTE_TYPE.Color | PALETTE_TYPE.BgColor

interface Color {
  paletteType?: ALLOWED_COLORS_TYPES,
  name: string
}


class ColorBuilder implements Color, Draggable {
  paletteType: ALLOWED_COLORS_TYPES
  name: string
  element: HTMLElement

  constructor(name: string, paletteType: ALLOWED_COLORS_TYPES) {
    this.name = name
    this.paletteType = paletteType
    
    this.element = this.renderColor()
    this.configure()
  }

  // private createHtmlElement(type: string = 'div', id: string, classList: string[], content?: string): HTMLElement {
  //   const element = document.createElement(type)
  //   element.id = id
  //   classList.forEach(c => element.classList.add(c))
  //   element.innerHTML = content || ''
  //   return element
  // }

  private renderColor ():HTMLElement {
    const className = this.paletteType === PALETTE_TYPE.Color ? 'color' : 'bg'
    return createHtmlElement('div', `${className}-${this.name}`, ['color', `bg-${this.name}`, 'selector'])
  }

  htmlBuilder (): HTMLElement {
    const el = this.element
    el.setAttribute('draggable', 'true');
    return el
  }

  configure() {
    this.element.removeEventListener('dragstart', this.dragStartHandler)
    this.element.removeEventListener('dragend', this.dragEndHandler)
    // 
    this.element.addEventListener('dragstart', this.dragStartHandler)
    this.element.addEventListener('dragend', this.dragEndHandler)
  }
  // drag methods
  @autobind
  dragStartHandler(event: DragEvent) {
    const dragType = this.paletteType === PALETTE_TYPE.Color ? 'color' : 'bgColor'
    console.log('dragStart from ', dragType)
    event.dataTransfer!.setData('text/plain', 
      JSON.stringify({
        [dragType]: {
          name: this.name
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

export { Color, ColorBuilder }