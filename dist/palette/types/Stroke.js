var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { PALETTE_TYPE, STROKE_ENUM, createHtmlElement } from "../shared.js";
import { autobind } from "../../shared/decorators.js";
class StrokeBuilder {
    constructor(type, className = '', color = 'stroke-color') {
        this.paletteType = PALETTE_TYPE.Stroke;
        this.type = type;
        this.className = className;
        this.color = color;
        this.element = this.renderStrokes();
        this.configure();
    }
    configure() {
        this.element.removeEventListener('dragstart', this.dragStartHandler);
        this.element.removeEventListener('dragend', this.dragEndHandler);
        // 
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    }
    getClassNameForEnum(_enum, cutsomClass) {
        switch (_enum) {
            case STROKE_ENUM.Thin: return "border-2";
            case STROKE_ENUM.Medium: return "border-4";
            case STROKE_ENUM.Dark: return "border-8";
            case STROKE_ENUM.Custom: return cutsomClass || '';
        }
    }
    // private createHtmlElement(type: string = 'div', id: string, classList: string[], content?: string): HTMLElement {
    //   const element = document.createElement(type)
    //   element.id = id
    //   classList.forEach(c => element.classList.add(c))
    //   element.innerHTML = content || ''
    //   return element
    // }
    renderStrokes() {
        let strokeWidth = this.getClassNameForEnum(this.type, this.className);
        const color = this.color || 'white';
        const strokeContainer = createHtmlElement('div', `stroke-${this.type}-container`, ['stroke', strokeWidth, color, 'selector']);
        const el = createHtmlElement('div', `stroke-${this.type}`, []);
        strokeContainer.append(el);
        strokeContainer.setAttribute('draggable', 'true');
        return strokeContainer;
    }
    colorSlider() {
        let slider = createHtmlElement('div', 'color-slider-custom', ['']);
        return slider;
    }
    htmlBuilder() {
        const el = this.element;
        el.setAttribute('draggable', 'true');
        return el;
    }
    // drag methods
    dragStartHandler(event) {
        console.log('dragStart from stroke');
        event.dataTransfer.setData('text/plain', JSON.stringify({
            stroke: {
                type: this.type,
                className: this.className
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
], StrokeBuilder.prototype, "dragStartHandler", null);
__decorate([
    autobind
], StrokeBuilder.prototype, "dragEndHandler", null);
export { StrokeBuilder };
