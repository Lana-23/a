export class ShadowComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._locales = {};
    }

    set locales(data) {
        this._locales = data;
        if (this.isConnected) {
            this.render();
        }
    }

    get locales() {
        return this._locales;
    }

    render() {
        // This method is intended to be overridden by subclasses
    }

    connectedCallback() {
        this.render();
    }

    // Helper to create and append elements, simplifying subclass code
    _create(tag, attributes = {}, children = []) {
        const el = document.createElement(tag);
        for (const key in attributes) {
            el.setAttribute(key, attributes[key]);
        }
        children.forEach(child => {
            if (typeof child === 'string') {
                el.appendChild(document.createTextNode(child));
            } else {
                el.appendChild(child);
            }
        });
        return el;
    }
}
