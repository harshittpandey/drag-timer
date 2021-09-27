var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { createHtmlElement } from "../shared.js";
import { autobind } from "../../shared/decorators.js";
class ShapeBuilder {
    constructor(key, name, shape, size, renderOptions) {
        this.key = key;
        this.name = name;
        this.shape = shape;
        this.size = size;
        this.renderOptions = renderOptions;
        this.element = this.renderShape();
        this.configure();
    }
    configure() {
        this.element.removeEventListener('dragstart', this.dragStartHandler);
        this.element.removeEventListener('dragend', this.dragEndHandler);
        // 
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    }
    htmlBuilder() {
        const el = createHtmlElement('div', this.key, [this.key]);
        const name = createHtmlElement('div', '', ['shape-name'], this.name);
        el.append(this.element, name);
        el.setAttribute('draggable', 'true');
        return el;
    }
    renderShape() {
        const [width, height] = this.size;
        const shapeContainer = createHtmlElement('div', `shape-${this.key}-container`, ['shape']);
        const el = createHtmlElement('div', `shape-${this.key}`, [`width-${width}`, `height-${height}`, 'selector']);
        shapeContainer.append(el);
        el.setAttribute('draggable', 'true');
        return shapeContainer;
    }
    // drag methods
    dragStartHandler(event) {
        console.log('dragStart');
        event.dataTransfer.setData('text/plain', JSON.stringify({
            shape: { key: this.key }
        }));
        event.dataTransfer.effectAllowed = 'move';
    }
    dragEndHandler(_) {
        // console.log('dragend')
    }
}
__decorate([
    autobind
], ShapeBuilder.prototype, "dragStartHandler", null);
__decorate([
    autobind
], ShapeBuilder.prototype, "dragEndHandler", null);
export { ShapeBuilder };
