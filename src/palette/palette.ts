import { DEFINED_TYPES, BUILDER_OBJECTS_TYPE } from './paletteTypes.js';
import { PALETTE_TYPE, createHtmlElement } from "./shared.js"
import {PaletteBuilder} from "./types/PaletteBuilder.js"

class Palette {
  hostElement: HTMLDivElement
  paletteType: PALETTE_TYPE
  key: string
  // header: string
  element: HTMLElement
  // shape: SHAPE
  constructor (hostElement: HTMLDivElement, key: string, header: string, paletteType: PALETTE_TYPE) {
    this.hostElement = hostElement
    this.key = key
    // this.header = header
    this.paletteType = paletteType

    this.element = this.createPalette(header)
  }

  private createPalette (header: string): HTMLElement {
    const palette = createHtmlElement('div', this.key, [this.key])
    if (header !== '') {
      const headerEle = createHtmlElement('div', 'header', ['header'], header)
      palette.append(headerEle)
    }
    const itemsContainer = createHtmlElement('div', 'items-container', ['items-container'])
    
    palette.append(itemsContainer)
    this.hostElement.append(palette)
    return palette
  }

  renderItems (items: DEFINED_TYPES[]) {
    const container = this.element.querySelector('#items-container')!
    items.forEach((item: DEFINED_TYPES) => {
      const paletteItem = new PaletteBuilder<PALETTE_TYPE, DEFINED_TYPES>(item.paletteType!, item)
      container.append(
        paletteItem.htmlBuilder()
      )
    })
  }
}

export { Palette }