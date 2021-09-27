var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { PALETTE_TYPE, createHtmlElement } from "../shared.js";
import { autobind } from "../../shared/decorators.js";
class ColorBuilder {
    constructor(name) {
        this.paletteType = PALETTE_TYPE.Color;
        this.name = name;
        this.element = this.renderColor();
        this.configure();
    }
    // private createHtmlElement(type: string = 'div', id: string, classList: string[], content?: string): HTMLElement {
    //   const element = document.createElement(type)
    //   element.id = id
    //   classList.forEach(c => element.classList.add(c))
    //   element.innerHTML = content || ''
    //   return element
    // }
    renderColor() {
        return createHtmlElement('div', `color-${this.name}`, ['color', `bg-${this.name}`, 'selector']);
    }
    htmlBuilder() {
        const el = this.element;
        el.setAttribute('draggable', 'true');
        return el;
    }
    configure() {
        this.element.removeEventListener('dragstart', this.dragStartHandler);
        this.element.removeEventListener('dragend', this.dragEndHandler);
        // 
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    }
    // drag methods
    dragStartHandler(event) {
        console.log('dragStart from color');
        event.dataTransfer.setData('text/plain', JSON.stringify({
            color: {
                name: this.name
            }
        }));
        event.dataTransfer.effectAllowed = 'move';
    }
    dragEndHandler(_) {
        // console.log('dragend')
    }
}
__decorate([
    autobind
], ColorBuilder.prototype, "dragStartHandler", null);
__decorate([
    autobind
], ColorBuilder.prototype, "dragEndHandler", null);
export { ColorBuilder };
