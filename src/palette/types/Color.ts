import { PALETTE_TYPE, Draggable, createHtmlElement } from "../shared.js"
import {autobind} from "../../shared/decorators.js"

interface Color {
  paletteType?: PALETTE_TYPE.Color,
  name: string
}

class ColorBuilder implements Color, Draggable {
  paletteType: PALETTE_TYPE.Color = PALETTE_TYPE.Color
  name: string
  element: HTMLElement

  constructor(name: string) {
    this.name = name
    
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
    return createHtmlElement('div', `color-${this.name}`, ['color', `bg-${this.name}`, 'selector'])
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
    console.log('dragStart from color')
    event.dataTransfer!.setData('text/plain', 
      JSON.stringify({
        color: {
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